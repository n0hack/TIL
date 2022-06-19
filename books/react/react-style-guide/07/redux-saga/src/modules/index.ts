import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import github, { githubSaga } from "./github";

// 루트 리듀서
const rootReducer = combineReducers({ github });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

// 루트 사가
export function* rootSaga() {
  yield all([githubSaga()]);
}
