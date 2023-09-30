import React from 'react';
import { useInputs } from './hooks/useInputs';
import { SassComponent } from './components/SassComponent';
import Immer from './components/Immer';

const App = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });

  return (
    <div>
      <Immer />
    </div>
  );
};

export default App;
