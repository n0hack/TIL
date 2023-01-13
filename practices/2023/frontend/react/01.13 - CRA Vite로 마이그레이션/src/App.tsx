import React from 'react';
import logo from './logo.svg';
import './App.css';
import tw, { css } from 'twin.macro';
import { BackIcon } from '@static';

function App() {
  return (
    <div css={tw`w-full h-screen bg-gray-700`}>
      <BackIcon />
    </div>
  );
}

export default App;
