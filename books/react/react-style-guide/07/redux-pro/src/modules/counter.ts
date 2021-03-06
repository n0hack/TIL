import { createAction, createReducer } from "@reduxjs/toolkit";

const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff,
// });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseBy = createAction<number>(INCREASE_BY);

// 액션들에 대한 반환 타입
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 상태 타입
type CounterState = { count: number };

const initialState: CounterState = { count: 0 };

// 리듀서
// function counter(state: CounterState = initialState, action: CounterAction) {
//   switch (action.type) {
//     case "counter/INCREASE":
//       return { count: state.count + 1 };
//     case "counter/DECREASE":
//       return { count: state.count - 1 };
//     case "counter/INCREASE_BY":
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

const counter = createReducer(initialState, (builder) => {
  builder.addCase(increase, (state, action) => ({ count: state.count + 1 }));
  builder.addCase(decrease, (state, action) => ({ count: state.count - 1 }));
  builder.addCase(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));
});

export default counter;
