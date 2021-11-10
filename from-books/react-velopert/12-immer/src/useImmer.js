import { useState } from 'react';
import produce from 'immer';

export const useImmer = (initialState) => {
  const [state, setState] = useState(initialState);

  const updater = (draft) => {
    setState(produce(draft));
  };

  return [state, updater];
};
