import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReduxCounter from './ReduxCounter';
import { decrease, increase, setDiff } from '../../modules/counter';

function ReduxCounterContainer() {
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <ReduxCounter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />
  );
}

export default ReduxCounterContainer;
