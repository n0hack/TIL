import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { RootState } from "../modules";
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";

interface Props {
  count: number;
  increase: () => void;
  decrease: () => void;
  increaseAsync: () => void;
  decreaseAsync: () => void;
}

const CounterContainer = ({
  count,
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
}: Props) => {
  return (
    <Counter
      count={count}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect((state: RootState) => ({ count: state.counter }), {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
})(CounterContainer);
