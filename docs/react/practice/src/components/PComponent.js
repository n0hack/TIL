import React, { PureComponent } from 'react';

// React.memo
// State 또는 Props 변화가 없다면 리렌더링하지 않음
class PComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stateString: 'react',
      stateArrayObj: ['react', { react: '200' }],
    };
  }

  buttonClick = (type) => {
    if (type === 'String') {
      // 리렌더링 하지 않는다.
      this.setState({ stateString: 'react' });
    } else {
      // 객체 참조가 변하기에 리렌더링한다.
      this.setState({ stateArrayObj: ['react', { react: '200' }] });
    }
  };

  render() {
    console.log('render 실행');
    return (
      <div>
        <button onClick={(e) => this.buttonClick('String')}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick('ArrayObject')}>
          객체 배열 변경
        </button>
      </div>
    );
  }
}

export default PComponent;
