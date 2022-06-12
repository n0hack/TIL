import React from "react";

type Props = {
  counter: number;
  onIncrease: () => void;
  onDecrease: (num: number) => void;
};

function Counter({ counter, onIncrease, onDecrease }: Props) {
  return (
    <div>
      <span>{counter}</span>
      <br />
      <button onClick={() => onDecrease(-1)}>-1</button>
      <button onClick={() => onIncrease()}>+1</button>
    </div>
  );
}

export default Counter;
