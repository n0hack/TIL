import React from 'react';

const Counter = ({ increaseAsync, decreaseAsync, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => increaseAsync()}>+1</button>
      <button onClick={() => decreaseAsync()}>-1</button>
    </div>
  );
};

export default Counter;
