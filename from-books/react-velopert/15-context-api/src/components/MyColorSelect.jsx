import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/myColor';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const MyColorSelect = () => {
  const { action } = useContext(ColorContext);
  return (
    <>
      <h2>색을 선택해 주세요!</h2>
      <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div
            style={{
              width: '24px',
              height: '24px',
              background: color,
              cursor: 'pointer',
            }}
            onClick={() => action.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              action.setSubcolor(color);
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default MyColorSelect;
