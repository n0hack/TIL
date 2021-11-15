import { createReducer, createAction } from '@reduxjs/toolkit';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING, (requestType) => ({
  payload: requestType,
}));
export const finishLoading = createAction(FINISH_LOADING, (requestType) => ({
  payload: requestType,
}));

const initialState = {};

const loading = createReducer(initialState, {
  [START_LOADING]: (state, action) => ({ ...state, [action.payload]: true }),
  [FINISH_LOADING]: (state, action) => ({ ...state, [action.payload]: false }),
});

export default loading;
