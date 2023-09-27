import React, { useReducer } from 'react';

type State<T> = {
  [P in keyof T]: string;
};

type Action = React.ChangeEvent<HTMLInputElement>['target'];

function reducer<T>(state: State<T>, action: Action): State<T> {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const useInputs = <T extends State<T>>(initialForm: State<T>) => {
  const [state, dispatch] = useReducer(reducer<T>, initialForm);

  const handleChange = (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return [state, handleChange] as [State<T>, typeof handleChange];
};

export { useInputs };
