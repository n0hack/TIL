import React from 'react';
import { useInputs } from './hooks/useInputs';

const App = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });

  return (
    <div>
      <div>
        <input name="name" value={state.name} onChange={onChange('name')} />
        <input name="nickname" value={state.nickname} onChange={onChange('nickname')} />
      </div>
      <div>
        <p>이름: {state.name}</p>
        <p>닉네임: {state.nickname}</p>
      </div>
    </div>
  );
};

export default App;
