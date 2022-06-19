import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    console.clear();
    console.log("constructor");
    super(props);
    this.state = {
      number: 0,
    };
  }
  handleIncrease = () => {
    this.setState({ number: this.state.number + 1 });
  };
  handleDecrease = () => {
    this.setState((prev) => ({ number: prev.number - 1 }));
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(nextProps, nextState);
    if (!nextProps) return false;
    else return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    console.log(this.state);
    return (
      <div>
        <h3>{this.state.number}</h3>
        <button onClick={this.handleDecrease}>-1</button>
        <button onClick={this.handleIncrease}>+1</button>
      </div>
    );
  }
}
