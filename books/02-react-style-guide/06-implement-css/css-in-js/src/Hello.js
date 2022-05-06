import React from 'react';
import RedColor from './atoms/Color';

const css = {
  color: 'red',
  fontSize: 24,
};

const Hello = () => {
  console.log(RedColor);
  return <div style={RedColor}>Hello, world!</div>;
};

export default Hello;
