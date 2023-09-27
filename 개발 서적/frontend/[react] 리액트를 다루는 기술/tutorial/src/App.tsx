import React from 'react';
import { useInputs } from './hooks/useInputs';
import { SassComponent } from './components/SassComponent';

const App = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });

  return (
    <div>
      <SassComponent />
    </div>
  );
};

export default App;
