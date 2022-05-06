import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { failedFetch, succeededFetch } from './request';

const requestFetch = async () => {
  console.log('Fetch Data');
  const data = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data.data;
};

function* fetchData() {
  try {
    const payload = yield call(requestFetch);
    console.log('payload', payload);
    yield put(succeededFetch(payload));
  } catch (e) {
    console.log('Fail Fetch');
    yield put(failedFetch(e.message));
  }
}

function* mySaga() {
  yield takeEvery('request/REQUEST_FETCH', fetchData);
}

export default mySaga;
