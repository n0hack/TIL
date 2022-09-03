import { useEffect, useRef, useState } from "react";

class MockClass {
  randomValue: number;

  constructor() {
    this.randomValue = Math.random() * 1000;
    console.log("MockClass has built: ", this.randomValue);
  }

  get random() {
    return this.randomValue;
  }
}

function Component() {
  const [count, setCount] = useState(0);
  // useRef의 current는 변하지 않지만, 내부의 함수는 리렌더링마다 계속해서 실행 됨
  // React의 Reconciliation은 Render Phase, Commit Phase 두 가지로 나뉨
  const randomRef = useRef(new MockClass().random);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  console.log("randomRef.current: ", randomRef.current);

  useEffect(() => {
    if (intervalRef.current) {
      return () => {
        clearInterval(intervalRef.current);
      };
    } else {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  }, []);

  return <></>;
}

function App() {
  return <Component />;
}

export default App;
