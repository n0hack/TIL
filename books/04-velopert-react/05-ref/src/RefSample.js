import React, { Component } from 'react';

/* 
  Ref를 사용해야 하는 경우
  DOM 요소를 직접 조작해야 하는 경우
  - 포커스
  - 스크롤 조작
  - 캔버스 조작
*/

class RefSample extends Component {
  // React.createREf
  input;

  render() {
    return (
      <div>
        <input ref={(ref) => (this.input = ref)} />
      </div>
    );
  }
}

export default RefSample;
