import { useState } from 'react';
import produce from 'immer';

export function useImmer(initialState) {
  const [state, setState] = useState(initialState);

  function updator(f) {
    setState(produce(f));
  }

  return [state, updator];
}
