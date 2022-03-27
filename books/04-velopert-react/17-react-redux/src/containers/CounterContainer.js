import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/counter';

const CounterContainer = (props) => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(
    () =>
      // 디스패치는 useCallback과 같이 사용하는 습관 들이기
      dispatch(increase()),
    [dispatch]
  );
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

const mapStateToProps = (state) => ({ number: state.counter.number });
const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
