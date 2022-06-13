import { createReducer } from "@reduxjs/toolkit";
import { decrease, increase, increaseBy } from "./actions";
import { CounterState } from "./types";

const initialState: CounterState = {
  count: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(increase, (state, action) => ({ count: state.count + 1 }));
  builder.addCase(decrease, (state, action) => ({ count: state.count - 1 }));
  builder.addCase(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));
});

export default reducer;
