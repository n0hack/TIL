import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { RootState } from "../modules";
import { decrease, increase } from "../modules/counter";

function CounterContainer() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = (num: number) => dispatch(decrease(num));

  return (
    <Counter
      counter={counter}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
}

export default CounterContainer;
