import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import VeloApp from './VeloApp';

ReactDOM.render(
  <BrowserRouter>
    <VeloApp />
  </BrowserRouter>,
  document.getElementById('root')
);
