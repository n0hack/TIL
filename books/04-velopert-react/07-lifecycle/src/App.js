import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = { color: '#000000' };

  handleClick = () => {
    this.setState({ color: getRandomColor() });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
