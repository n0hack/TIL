import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.box = ref)} />
        <button onClick={() => this.box.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
