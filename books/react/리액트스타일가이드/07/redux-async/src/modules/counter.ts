const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = (num: number) => ({ type: DECREASE, payload: num });

const initialState = 0;

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;
type Counter = number;

function counter(state: Counter = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state + action.payload;
    default:
      return state;
  }
}

export default counter;
