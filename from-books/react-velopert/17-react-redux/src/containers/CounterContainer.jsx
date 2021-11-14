import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const handleIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const handleDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter
      number={number}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => dispatch(increase()),
//   decrease: () => dispatch(decrease()),
// });

// connect 함수에서 디스패치가 번거롭다면 이렇게 작성해도 됨
// const mapDispatchToProps = (dispatch) =>
// bindActionCreators({ increase, decrease }, dispatch);
// 이것도 귀찮으면 그냥 액션만 써도 됨
const mapDispatchToProps = { increase, decrease };

export default CounterContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
