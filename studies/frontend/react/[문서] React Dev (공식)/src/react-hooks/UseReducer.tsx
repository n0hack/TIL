import React, { useReducer } from 'react';

type State = {
  age: number;
};

type Action =
  | {
      type: 'incremented_age';
    }
  | {
      type: 'decremented_age';
    };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'incremented_age':
      return { ...state, age: state.age + 1 };
    case 'decremented_age':
      return { ...state, age: state.age - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  console.log('UseReducer');

  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'incremented_age' });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
};

export default UseReducer;
