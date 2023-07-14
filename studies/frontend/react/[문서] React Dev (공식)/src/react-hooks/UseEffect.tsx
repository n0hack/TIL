import { useEffect, useState } from 'react';

function UseEffect() {
  console.log('UseEffect');

  const [count, setCount] = useState(0);

  // 실험 API
  // const onVisit = useEffectEvent(visitedUrl => {
  //   logVisit(visitedUrl);
  // })

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
    <>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>{count}</div>
    </>
  );
}

export default UseEffect;
