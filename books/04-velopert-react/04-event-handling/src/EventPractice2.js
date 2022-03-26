import React, { Component } from 'react';

class EventPractice2 extends Component {
  state = { nickname: '', message: '' };

  handleChange = (e) => {
    this.setState(
      (prev) => ({ ...prev, [e.target.name]: e.target.value }),
      () => {
        console.log(this.state);
      }
    );
  };

  handleClick = (e) => {
    alert(`${this.state.nickname}: ${this.state.message}`);
    this.setState({ nickname: '', message: '' });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') this.handleClick();
  };

  render() {
    const { nickname, message } = this.state;

    return (
      <>
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={nickname}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="메시지"
          value={message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={this.handleClick}>확인</button>
      </>
    );
  }
}

export default EventPractice2;
