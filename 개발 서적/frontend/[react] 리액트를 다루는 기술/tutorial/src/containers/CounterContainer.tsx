import React, { useState } from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../modules';
import { decrease, increase } from '../modules/counterSaga';
import {} from 'redux';

const CounterContainer = () => {
  const number = useSelector((state: RootState) => state.counter.number);
  const dispatch = useDispatch<AppDispatch>();

  const onIncrease = async () => {
    dispatch(increase());
  };

  const onDecrease = () => dispatch(decrease());

  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

export default CounterContainer;
