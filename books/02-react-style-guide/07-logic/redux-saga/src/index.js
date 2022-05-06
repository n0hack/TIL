import ReactDOMClient from 'react-dom/client';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import request from './modules/request';
import mySaga from './modules/sagas';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(request, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
