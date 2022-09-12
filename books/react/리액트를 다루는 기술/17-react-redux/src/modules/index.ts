import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({ counter, todos });

const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
