import * as actions from "./actions";

export type CounterAction =
  | ReturnType<typeof actions.increase>
  | ReturnType<typeof actions.decrease>
  | ReturnType<typeof actions.increaseBy>;

export type CounterState = {
  count: number;
};
