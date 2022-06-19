import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
