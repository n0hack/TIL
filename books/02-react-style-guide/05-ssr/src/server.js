import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import Html from './Html';
import App from './App';

const app = express();
app.use('/', express.static('public'));

app.get('/sample', (req, res) => {
  ReactDOMServer.renderToStaticNodeStream(
    <Html>
      <App />
    </Html>
  ).pipe(res);
});

app.listen(3000, () => console.log('Server Start'));
