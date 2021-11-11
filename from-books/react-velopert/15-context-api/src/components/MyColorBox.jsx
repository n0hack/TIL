import React from 'react';
import ColorContext, { ColorConsumer } from '../contexts/myColor';

const MyColorBox = () => {
  return (
    <>
      <ColorConsumer>
        {({ state }) => (
          <>
            <div
              style={{
                width: '128px',
                height: '128px',
                background: state.color,
              }}
            ></div>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: state.subcolor,
              }}
            ></div>
          </>
        )}
      </ColorConsumer>
    </>
  );
};

export default MyColorBox;
