import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  // 클래스에서 화살표 함수 형태로 메서드를 작성하면, 굳이 바인딩할 필요 없음 (바벨이 처리)
  handleChange = (e) => this.setState({ message: e.target.value });
  handleClick = () => {
    alert(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={this.handleChange}
          value={this.state.message}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
