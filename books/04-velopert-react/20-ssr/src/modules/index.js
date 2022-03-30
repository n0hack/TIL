import { combineReducers } from 'redux';
import users, { usersSaga } from './users';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ users });
export function* rootSaga() {
  yield all([usersSaga()]);
}
export default rootReducer;
