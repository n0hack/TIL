import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const Test = ({ children }) => {
  return <div>{children(5)}</div>;
};

// 컨텍스트는 바로 사용할 수 있는 것이 아닌, Consumer 컴포넌트로 조회해야 함
const ColorBox = () => {
  // useContext Hook을 사용하면 간편하게 상태 참조 가능
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{
          width: '128px',
          height: '128px',
          backgroundColor: state.color,
        }}
      ></div>
      <div
        style={{
          width: '64px',
          height: '64px',
          backgroundColor: state.subColor,
        }}
      ></div>
      {/* <ColorConsumer>
        {({ state }) => (
          <>
            <div
              style={{
                width: '128px',
                height: '128px',
                backgroundColor: state.color,
              }}
            ></div>
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: state.subColor,
              }}
            ></div>
          </>
        )}
      </ColorConsumer> */}
      <Test>{(val) => val * 5}</Test>
    </>
  );
};

export default ColorBox;
