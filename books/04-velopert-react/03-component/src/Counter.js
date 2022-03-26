import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  handleClick() {
    this.setState(
      (prev) => ({
        number: prev.number + 1,
      }),
      () => {
        console.log('setState 함수가 호출되었습니다.');
        console.log(this.state);
      }
    );
  }

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

export default Counter;
