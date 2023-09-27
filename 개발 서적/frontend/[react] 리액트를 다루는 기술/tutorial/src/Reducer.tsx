import React, { useReducer } from 'react';

type ReducerProps = {};

type State = {
  value: number;
};

type Action = {
  type: 'INCREASE' | 'DECREASE';
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREASE':
      return { value: state.value + 1 };
    case 'DECREASE':
      return { value: state.value - 1 };
  }
}

const Reducer = ({}: ReducerProps) => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
    </div>
  );
};

export { Reducer };
