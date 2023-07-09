import React, { useState } from 'react';

const createInitialTodos = () => {
  console.log('createInitialTodos');

  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: `Item ${i + 1}`,
    });
  }
  return initialTodos;
};

const someFunction = () => {
  console.log('someFunction');
};

const UseState = () => {
  console.log('UseState');

  // createInitialTodos() 형태로 쓰면, 리렌더링될 때마다 호출됨
  const [todos, setTodos] = useState(createInitialTodos);
  // () => someFunction이 아닌, someFunction 형태로 쓰면, 바로 호출됨
  const [fn, setFn] = useState(() => someFunction);
  const [count, setCount] = useState(0);

  const handleMinusButtonClick = () => {
    setCount((prevCount) => prevCount - 1);
    fn();
  };

  const handlePlusButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
    setFn(() => () => {
      console.log('newFunction');
    });
  };

  return (
    <div>
      <button onClick={handleMinusButtonClick}>-1</button>
      <span>{count}</span>
      <button onClick={handlePlusButtonClick}>+1</button>
    </div>
  );
};

export default UseState;
