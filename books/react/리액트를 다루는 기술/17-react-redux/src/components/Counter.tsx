import React from "react";

interface Props {
  number: number;
  onIncrease: () => {};
  onDecrease: () => {};
}

const Counter = ({ number, onDecrease, onIncrease }: Props) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
