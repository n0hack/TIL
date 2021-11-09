import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      width: '300px',
      height: '300px',
      position: 'relative',
      overflow: 'auto',
    };

    const innerStyle = {
      background: 'linear-gradient(white, black)',
      width: '100%',
      height: '650px',
    };

    return (
      <div ref={(ref) => (this.box = ref)} style={style}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
