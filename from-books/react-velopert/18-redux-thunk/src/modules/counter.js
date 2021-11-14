import { createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    INCREASE: (state, payload) => state + 1,
    DECREASE: (state, payload) => state - 1,
  },
});

const increaseAsync = () => (dispatch) =>
  setTimeout(() => dispatch(counter.actions.INCREASE()), 1000);
const decreaseAsync = () => (dispatch) =>
  setTimeout(() => dispatch(counter.actions.DECREASE()), 1000);

export { increaseAsync, decreaseAsync };

export const { INCREASE: increase, DECREASE: decrease } = counter.actions;

export default counter.reducer;
