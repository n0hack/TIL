import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalContextProvider } from './contexts/ModalContext';
import reportWebVitals from './reportWebVitals';

import './scss/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
