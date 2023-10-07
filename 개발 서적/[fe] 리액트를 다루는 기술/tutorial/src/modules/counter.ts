import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type CounterState = {
  number: number;
};

const ACTION_TYPE_PREFIX = 'counter';

export const increaseAsync = createAsyncThunk<number, number | undefined>(
  `${ACTION_TYPE_PREFIX}/increaseAsync`,
  async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount ?? 1;
  }
);

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
  extraReducers: (builder) =>
    builder.addCase(increaseAsync.fulfilled, (state, action) => {
      state.number += action.payload;
    }),
});

// Action Creator
export const { increase, decrease } = counterSlice.actions;

// Reducer
export default counterSlice.reducer;
