import React from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends React.Component {
  // 간편하게 static 키워드를 붙이면 됨
  // 이렇게 하면 this.context가 value를 가리키게 됨
  // 하지만 클래스형 컴포넌트에서는 이렇게 하면 하나의 컨텍스트만 가리킬 수 있음
  static contextType = ColorContext;

  handleSelect = (color) => {
    this.context.actions.setColor(color);
  };

  handleSubSelect = (color) => {
    this.context.actions.setSubColor(color);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>

        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={() => this.handleSelect(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSubSelect(color);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default SelectColors;
