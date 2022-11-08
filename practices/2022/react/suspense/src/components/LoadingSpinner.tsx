import React from 'react';
import { RingSpinner } from 'react-spinners-kit';

interface Props {}

const LoadingSpinner = ({}: Props) => {
  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%' }}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <RingSpinner size={50} color="#fff" />
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
