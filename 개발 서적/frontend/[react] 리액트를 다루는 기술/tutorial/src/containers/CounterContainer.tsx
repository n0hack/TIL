import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state: RootState) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());

  const onDecrease = () => dispatch(decrease());

  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

export default CounterContainer;
