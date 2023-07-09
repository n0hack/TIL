import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UseState from './react-hooks/useState';
import UseReducer from './react-hooks/UseReducer';
import UseImperativeHandle, { Props } from './react-hooks/UseImperativeHandle';

function App() {
  const divRef = useRef<Props>(null);
  console.log('App');

  const handleBoxClick = () => {
    divRef?.current?.test();
  };

  return (
    <>
      <UseImperativeHandle ref={divRef} />
      <button onClick={handleBoxClick}>클릭</button>
    </>
  );
}

export default App;
