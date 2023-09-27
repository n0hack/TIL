import React, { Component } from 'react';

export default class ScrollBox extends Component {
  box: HTMLDivElement | null;

  constructor(props: any) {
    super(props);
    this.box = null;
  }

  scrollToBottom = () => {
    if (!this.box) return;

    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style: React.CSSProperties = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle: React.CSSProperties = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}
