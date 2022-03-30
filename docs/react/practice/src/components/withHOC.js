import { useEffect } from 'react';

// HOC를 구현하면 여러 컴포넌트에서 공통적으로 사용해야 하는 부분을 중복없이 구현할 수 있음
export default function withHOC(Component, componentName) {
  return ({ name }) => {
    useEffect(() => {
      console.log(`3. InComponentName: ${componentName}`);
    }, []);
    console.log('1. InComponent render');
    return <Component name={name} />;
  };
}
