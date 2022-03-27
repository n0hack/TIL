import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  const { state, actions } = useContext(ColorContext);

  return (
    <div>
      <h3>색상을 선택하세요.</h3>
      <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              background: color,
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          ></div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
