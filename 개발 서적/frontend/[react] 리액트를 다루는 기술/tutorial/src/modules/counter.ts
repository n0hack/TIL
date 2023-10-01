import { createSlice } from '@reduxjs/toolkit';

export type CounterState = {
  number: number;
};

const initialState: CounterState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.number += 1;
    },
    decrease: (state) => {
      state.number -= 1;
    },
  },
});

// Action Creator
export const { increase, decrease } = counterSlice.actions;

// Reducer
export default counterSlice.reducer;
