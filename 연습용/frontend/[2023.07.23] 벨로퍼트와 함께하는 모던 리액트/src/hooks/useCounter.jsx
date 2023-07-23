import React from 'react';

const useCounter = () => {
  const [count, setCount] = React.useState(0);

  const onIncrease = () => {
    setCount((prevState) => prevState + 1);
  };

  const onDecrease = () => {
    setCount((prevState) => prevState - 1);
  };

  return { count, onIncrease, onDecrease };
};

export default useCounter;
