import { css } from '@emotion/react';
import React from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from './Button/Button';
import Dialog from './Dialog/Dialog';

interface Props {}

type T = Event & {
  target: {
    height: number;
  };
};

const App = ({}: Props) => {
  const [height, setHeight] = useState(window.visualViewport?.height);
  const initialHeight = useMemo(() => {
    return window.visualViewport?.height;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isMobile = useMemo(() => {
    const mobileRegex = [
      /Android/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return mobileRegex.some((mobile) => navigator.userAgent.match(mobile));
  }, []);
  const [open, setOpen] = useState(false);

  const handleResize = useCallback(
    (e: any) => {
      console.log(initialHeight, height);

      setHeight(e.target.height);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [height]
  );

  useEffect(() => {
    window.visualViewport?.addEventListener('resize', handleResize);
    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  return (
    <div
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        border: 1px solid black;
      `}
    >
      <div style={{ flex: 1 }}>
        <span>기존 높이:{height}</span>
        <br />
        <span>높이 차:{initialHeight! - height!}</span>
        <br />
        <input />
        <Button onClick={() => setOpen(true)}>버튼</Button>
      </div>
      <button
        css={css`
          position: fixed;
          left: 0;
          bottom: ${isMobile ? initialHeight! - height! : 0}px;
          width: 100%;
          height: 60px;
        `}
      >
        버튼
      </button>
      <Dialog
        open={open}
        title="다이얼로그"
        confirmText="확인"
        onConfirm={() => setOpen(false)}
      />
    </div>
  );
};

export default App;
