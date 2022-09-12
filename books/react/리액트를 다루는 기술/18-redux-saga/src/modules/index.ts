import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({ counter, loading, sample });

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
