import React, { useReducer } from "react";

type Props = {};

type ActionType = { type: "increase" | "decrease"; payload?: number };

function reducer(state: number, action: ActionType): number {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
}

const UseReducer = ({}: Props) => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <b>{count}</b>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
    </div>
  );
};

export default UseReducer;
