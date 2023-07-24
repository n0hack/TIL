import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import React from 'react';

type NetworkErrorProps = {
  onClickRetry?: () => void;
};

const NetworkError = ({ onClickRetry }: NetworkErrorProps) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <div>
      네트워크 오류 발생
      <br />
      <button
        onClick={() => {
          console.log('clicked');
          reset();
          onClickRetry?.();
        }}
      >
        재시도
      </button>
    </div>
  );
};

export default NetworkError;
