/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

interface Props {}

type T = Event & {
  target: {
    height: number;
  };
};

const App = ({}: Props) => {
  const [height, setHeight] = useState(window.visualViewport?.height);

  const handleResize = (e: any) => {
    setHeight(e.target.height);
  };

  useEffect(() => {
    window.visualViewport?.addEventListener('resize', handleResize);
    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div>
        <span>{height}</span>
      </div>
      <button
        css={css`
          width: 100%;
          height: 60px;
        `}
      >
        버튼
      </button>
    </div>
  );
};

export default App;
