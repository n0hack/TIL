import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';

const rootReducer = combineReducers({ counter });

export function* rootSaga() {
  // all은 사가들을 합쳐주는 역할
  yield all([counterSaga()]);
}

export default rootReducer;
