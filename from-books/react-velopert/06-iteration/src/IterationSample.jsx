import React, { Component } from 'react';

class IterationSample extends Component {
  state = {
    names: [
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
    ],
    inputText: '',
    nextId: 5,
  };

  onChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onClick = () => {
    const names = this.state.names.concat({
      id: this.state.nextId,
      text: this.state.inputText,
    });
    this.setState({ names, inputText: '', nextId: this.state.nextId + 1 });
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') this.onClick();
  };

  onDoubleClick = (id) => {
    const names = this.state.names.filter((name) => name.id !== id);
    this.setState({ names });
  };

  render() {
    const nameList = this.state.names.map((name) => (
      <li key={name.id} onDoubleClick={() => this.onDoubleClick(name.id)}>
        {name.text}
      </li>
    ));
    return (
      <>
        <input
          value={this.state.inputText}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        <button onClick={this.onClick}>추가</button>
        <ul>{nameList}</ul>
      </>
    );
  }
}

export default IterationSample;
