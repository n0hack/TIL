import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = { number: 0, color: null };
  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor 호출');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps 호출');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount 호출');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate 호출', nextProps, nextState);
    // 숫자의 마지막 자리가 4라면 리렌더링 하지 않는다.
    return nextState.number % 10 !== 4;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM에 최종 반영 직전 기록(
    console.log('getSnapshotBeforeUpdate 호출', prevProps, prevState);
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate 호출', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 직전 색상:', prevProps.color);
      console.log('업데이트 직전 색상:', snapshot);
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  render() {
    console.log('render 호출');

    const style = { color: this.props.color };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
