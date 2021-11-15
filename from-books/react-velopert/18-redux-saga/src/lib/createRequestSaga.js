import { call, put } from 'redux-saga/effects';
import { finishLoading, startLoading } from '../modules/loading';

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    // 로딩 시작
    yield put(startLoading(type));

    try {
      const response = yield call(request, action.payload);
      yield put({ type: SUCCESS, payload: response.data });
    } catch (e) {
      yield put({ type: FAILURE, payload: e, error: true });
    }
    yield put(finishLoading(type));
  };
}
