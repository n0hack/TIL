import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import todos from './todos';
import sample, { sampleSaga } from './sample';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ counter, todos, sample, loading });

export function* rootSaga() {
  // 여러 Saga를 합치는 역할
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
