import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef;

  constructor(props) {
    super(props);
    console.log(`[mount]: constructor`);
  }

  // 상태를 동기화할 필요가 있다면 변경을, 아니라면 null을 반환
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[mount/update]: getDerivedStateFromProps');
    // Props의 color가 변경되었다면, state 갱신
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('[mount]: componentDidMount\n\n');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[update]: shouldComponentUpdate`, nextProps, nextState);
    return nextState.number % 4 !== 0;
  }

  // 업데이트되기 바로 직전 (반영 직전)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[update]: getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[update]: componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 직전 색상: ', snapshot);
    }
    console.log('\n\n');
  }

  componentWillUnmount() {
    console.log('[unmount]: componentWillUnmount');
  }

  render() {
    console.log('[mount/update]: render');

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

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
}

export default LifeCycleSample;
