import React, { Component, Suspense, useState } from 'react';
// const SplitMe = React.lazy(() => import('./SplitMe'));
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>로딩!</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  // state = { SplitMe: null };

  // handleClick = async () => {
  //   // React.lazy 없이 코드 스플리팅
  //   const loadedModule = await import('./SplitMe');
  //   this.setState({ SplitMe: loadedModule.default });
  // };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  const onClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <p onClick={onClick} onMouseOver={onMouseOver}>
        Hello React
      </p>
      {/* <Suspense fallback={<div>로딩 중...</div>}> */}
      {visible && <SplitMe />}
      {/* </Suspense> */}
    </div>
  );
}

export default App;
