import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import LifeCycleSamle from './LifeCycleSamle';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div className="App">
        <LifeCycleSamle color={this.state.color} />
      </div>
    );
  }
}

export default App;
