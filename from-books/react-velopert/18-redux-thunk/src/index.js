import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: [ReduxThunk],
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
