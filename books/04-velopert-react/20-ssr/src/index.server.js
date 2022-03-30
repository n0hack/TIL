import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import path from 'path';
import fs from 'fs';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { rootSaga } from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import PreloadContext from './lib/PreloadContext';
import createSagaMiddleware, { END } from 'redux-saga';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

const manifest = JSON.parse(
  fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
);

const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key))
  .map((key) => `<script src="${manifest.files[key]}"></script>`)
  .join('');

const statsFile = path.resolve('./build/loadable-stats.json');

function createPage(root, tags) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>React App</title>
    ${tags.styles}
    ${tags.links}
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${root}</div>
    ${tags.scripts}
  </body>
  </html>
  `;
}

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러
const serverRender = async (req, res, next) => {
  const context = {};
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
  );

  const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

  // 요청이 들어올 때마다 스토어를 만들기 때문에 프로미스 처리를 해야함
  const preloadContext = { done: false, promises: [] };

  const extractor = new ChunkExtractor({ statsFile });

  const jsx = (
    <ChunkExtractorManager extractor={extractor}>
      <PreloadContext.Provider value={preloadContext}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </PreloadContext.Provider>
    </ChunkExtractorManager>
  );
  // 딱 한 번 렌더링 하고, 프로미스 대기
  ReactDOMServer.renderToStaticMarkup(jsx);
  // 액션을 모니터링하는 사가들이 모두 종료
  store.dispatch(END);
  try {
    await sagaPromise;
    await Promise.all(preloadContext.promises);
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx);
  const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`;

  const tags = {
    scripts: stateScript + extractor.getScriptTags(),
    styles: extractor.getStyleTags(),
    links: extractor.getLinkTags(),
  };
  res.send(createPage(root, tags));
};

const serve = express.static(path.resolve('./build'), { index: false });

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});
