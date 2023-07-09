import { Profiler, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UseState from './react-hooks/useState';
import UseReducer from './react-hooks/UseReducer';
import UseImperativeHandle, { Props } from './react-hooks/UseImperativeHandle';

function App() {
  console.log('App');

  const [count, setCount] = useState(0);

  // 굳이 불필요한 의존성은 useEffect 내에서 만들어 사용하기
  useEffect(() => {
    console.log('useEffect');
    const intervalId = setInterval(() => {
      // 함수형 업데이트를 하면, 의존성이 필요하지 않음
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      console.log('clearInterval');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Profiler id="app" onRender={(...args) => console.log(args)}>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>{count}</div>
    </Profiler>
  );
}

export default App;
