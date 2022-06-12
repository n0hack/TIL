import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./modules";
import { MiddlewareAPI, Dispatch, Middleware, Action } from "redux";

const Logger: Middleware = (store) => {
  console.log(store);
  return (next) => {
    return (action) => {
      console.log("dispatching", action);
      let result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
};

const store = configureStore({ reducer: rootReducer, middleware: [Logger] });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
