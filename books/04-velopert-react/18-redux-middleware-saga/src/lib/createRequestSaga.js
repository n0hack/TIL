import { put, call } from 'redux-saga/effects';
import { finishLoading, startLoading } from '../modules/loading';

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));
    try {
      const post = yield call(request, action.payload);
      yield put({ type: SUCCESS, payload: post.data });
    } catch (e) {
      yield put({ type: FAILURE, payload: e, error: true });
    }
    yield put(finishLoading(type));
  };
}
