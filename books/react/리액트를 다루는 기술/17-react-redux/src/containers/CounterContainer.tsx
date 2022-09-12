import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { AppDispath, RootState } from "../modules";
import { decrease, increase } from "../modules/counter";

interface Props {}

const CounterContainer = ({}: Props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispath>();

  return (
    <Counter
      number={count}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};

// connect는 내부적으로 React.memo를 해주지만, useSelector/Dispatch는 X
export default React.memo(CounterContainer);
