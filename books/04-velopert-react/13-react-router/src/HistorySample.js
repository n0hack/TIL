import React, { useCallback, useContext, useEffect } from 'react';
import { UNSAFE_NavigationContext, useNavigate } from 'react-router-dom';

export function useBlocker(blocker, when = true) {
  const { navigator } = useContext(UNSAFE_NavigationContext);

  useEffect(() => {
    if (!when) return;

    const unblock = navigator.block((tx) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };
      blocker(autoUnblockingTx);
    });
    return unblock;
  }, [navigator, blocker, when]);
}

export function usePrompt(message, when = true) {
  const blocker = useCallback(
    (tx) => {
      //   eslint-disable-next-line no-alert
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useBlocker(blocker, when);
}

const HistorySample = () => {
  const navigate = useNavigate();
  usePrompt('현재 페이지를 벗어나시겠습니까?', true);
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
