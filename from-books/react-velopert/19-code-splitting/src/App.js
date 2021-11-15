import React, { Suspense, useState } from 'react';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>로딩 중</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <>
      <p>Hello React!!</p>
      <button onClick={onClick} onMouseOver={onMouseOver}>
        Click!
      </button>
      {visible && <SplitMe />}
    </>
  );
}

export default App;
