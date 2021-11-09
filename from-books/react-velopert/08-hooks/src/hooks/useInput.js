import { useReducer } from 'react';

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

export default function useInput(initialForm, predicate) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e) => {
    if (predicate(e)) dispatch(e.target);
    else return;
  };

  return { state, onChange };
}
