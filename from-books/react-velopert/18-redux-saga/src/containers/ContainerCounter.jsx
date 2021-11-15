import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import {
  decrease,
  increase,
  increaseAsync,
  decreaseAsync,
} from '../modules/counter';

const ContainerCounter = ({
  number,
  decrease,
  increase,
  increaseAsync,
  decreaseAsync,
}) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(({ counter }) => ({ number: counter }), {
  decrease,
  increase,
  increaseAsync,
  decreaseAsync,
})(ContainerCounter);
