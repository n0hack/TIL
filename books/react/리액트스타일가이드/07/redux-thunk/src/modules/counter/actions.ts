import { createAction } from "@reduxjs/toolkit";
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseBy = createAction(INCREASE_BY, (diff: number) => ({
  payload: diff,
}));
