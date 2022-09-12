import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from ".";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => async (dispatch: Dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => async (dispatch: Dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

type CounterState = number;
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

const initialState: CounterState = 0;

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

export default counter;
