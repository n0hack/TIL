import React from 'react';
import { ValueProvider } from '../lib/ContextAPI';
import ContextChild from './ContextChild';

const ContextFirst = () => {
  return (
    <ValueProvider>
      <ContextChild />
    </ValueProvider>
  );
};

export default ContextFirst;
