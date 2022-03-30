import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from '../node_modules/react-router-dom/index';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { rootSaga } from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { loadableReady } from '@loadable/component';

const sagaMiddleware = createSagaMiddleware();

// 스토어 생성 과정에서 상태 재사용
const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
  loadableReady(() => ReactDOM.hydrate(<Root />, root));
} else {
  ReactDOM.render(<Root />, root);
}
