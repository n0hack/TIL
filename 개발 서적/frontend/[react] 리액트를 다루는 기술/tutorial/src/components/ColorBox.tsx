import React from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

type ColorBoxProps = {};

const ColorBox = ({}: ColorBoxProps) => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div style={{ width: '64px', height: '64px', background: state.color }} />
          <div style={{ width: '32px', height: '32px', background: state.subColor }} />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
