import React, { useDebugValue } from 'react';
import { useDebug } from './useDebug';

const UseDebugValue = () => {
  const { debug } = useDebug();

  return <div>{debug ? '디버그' : 'ㄴㄴ'}</div>;
};

export default UseDebugValue;
