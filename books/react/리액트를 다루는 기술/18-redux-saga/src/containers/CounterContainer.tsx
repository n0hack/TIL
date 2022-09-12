import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { RootState } from "../modules";
import { decreaseAsync, increaseAsync } from "../modules/counter";

interface Props {}

const CounterContainer = ({}: Props) => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
