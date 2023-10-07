import React, { Component } from 'react';

type P = {
  color: string;
};

type S = {
  number: number;
  color: string | null;
};

export default class LifeCycleSamle extends Component<P, S> {
  state: S = {
    number: 0,
    color: null,
  };

  myRef: HTMLHeadingElement | null = null;

  constructor(props: P) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps: P, prevState: S) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps: Readonly<P>, prevState: Readonly<S>) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef?.style.color;
    }

    return null;
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: any) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
