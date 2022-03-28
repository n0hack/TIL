import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = ({ counter, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={counter}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(({ counter }) => ({ counter }), {
  increaseAsync,
  decreaseAsync,
})(CounterContainer);
