import { createSlice } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const MODULE_NAME = 'counterSaga';

const initialState = 0;

const counterSagaSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    increase: (state) => state + 1,
    decrease: (state) => state - 1,
  },
});

function* increaseSaga() {
  yield delay(1000);
  put(counterSagaSlice.actions.increase);
}

function* decreaseSaga() {
  yield delay(1000);
  put(counterSagaSlice.actions.decrease);
}

export function* counterSaga() {
  yield takeEvery(counterSagaSlice.actions.increase.type, increaseSaga);
  yield takeLatest(counterSagaSlice.actions.decrease.type, decreaseSaga);
}

export const { increase, decrease } = counterSagaSlice.actions;

export default counterSagaSlice.reducer;
