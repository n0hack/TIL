import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from '../node_modules/react-router-dom/index';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
