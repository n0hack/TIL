import React, { useDebugValue, useState } from 'react';

const useDebug = () => {
  const [debug, setDebug] = useState(true);
  useDebugValue(debug ? '디버깅 중' : '디버깅 중 아님');

  return { debug };
};

export { useDebug };
