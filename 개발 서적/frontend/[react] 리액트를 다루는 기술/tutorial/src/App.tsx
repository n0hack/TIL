import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  scrollBox: ScrollBox | null;

  constructor(props: any) {
    super(props);
    this.scrollBox = null;
  }

  render() {
    return (
      <div className="App">
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox?.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
