import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = (props) => {
  console.log(props);
  return <Counter {...props} />;
};

export default connect((state) => ({ number: state.counter }), {
  increaseAsync,
  decreaseAsync,
})(CounterContainer);
