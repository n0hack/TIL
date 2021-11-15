import { createAction, createReducer } from '@reduxjs/toolkit';
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from 'redux-saga/effects';

// 액션 정의, 생성
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 이벤트가 payload에 들어감
export const increaseAsync = createAction(INCREASE_ASYNC, () => ({
  payload: undefined,
}));
export const decreaseAsync = createAction(DECREASE_ASYNC, () => ({
  payload: undefined,
}));

// 제너레이터 함수 (saga)
function* increaseSaga() {
  const number = yield select((state) => state.counter);
  console.log(`현재 값은 ${number}입니다.`);
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

// saga 동작 관리
export function* counterSaga() {
  // 들어온 액션에 대한 처리 (문자열)
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// export const increaseAsync = () => (dispatch, getState) => {
//   setTimeout(() => dispatch(increase()), 2000);
// };
// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(decrease()), 2000);
// };

const initialState = 0;

const counter = createReducer(initialState, {
  [INCREASE]: (state, action) => {
    return state + 1;
  },
  [DECREASE]: (state, action) => {
    return state - 1;
  },
});

export default counter;
