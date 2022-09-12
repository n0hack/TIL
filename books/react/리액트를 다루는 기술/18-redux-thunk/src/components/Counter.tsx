import React from "react";

interface Props {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter = ({ count, onIncrease, onDecrease }: Props) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
