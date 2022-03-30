import React, { Component } from 'react';

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = { stateString: 'react' };
  }

  stateChange = (flag) => {
    if (flag === 'direct') {
      // 직접 변경하면 리렌더링 되지 않기에, forceUpdate 실행
      this.state.stateString = '리액트';
      this.forceUpdate();
    } else this.setState({ stateSrting: '리액트' });
    console.log(this.state.stateString);
  };

  render() {
    return (
      <div style={{ padding: '0px' }}>
        <button onClick={(e) => this.stateChange('direct', e)}>
          직접 변경
        </button>
        <button onClick={(e) => this.stateChange('setstate', e)}>
          setState로 변경
        </button>
        <br />
        [state 변경] stateString: {this.state.stateString}
      </div>
    );
  }
}

export default SetState;
