import React, { useReducer, useState } from 'react';
import styles from './Counter.module.scss';
import useCounter from '../hooks/useCounter';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

const Counter = () => {
  // const [count, dispatch] = useReducer(reducer, 0);

  // const onIncrease = () => {
  //   dispatch({ type: 'INCREMENT' });
  // };

  // const onDecrease = () => {
  //   dispatch({ type: 'DECREMENT' });
  // };
  const { count, onDecrease, onIncrease } = useCounter();

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onDecrease}>
        -1
      </button>
      <h1>{count}</h1>
      <button className={styles.button} onClick={onIncrease}>
        +1
      </button>
    </div>
  );
};

export default Counter;
