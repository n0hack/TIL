import React from 'react';
import { css } from '../styled-system/css';
import { Card } from './components/card';

const style = css({
  fontSize: '2xl',
  '& span': {
    color: 'pink.400',
  },
});

function App() {
  return (
    <React.Fragment>
      <div className={style}>
        <p className={css({ color: 'primary' })}>Bliss River</p>
        <p className={css({ color: 'bliss.50' })}>Bliss Alizarin</p>
        <span>Span</span>
      </div>
      <Card title="카드" description="lorem ipsum" css={{ bg: 'blue.400' }} />
    </React.Fragment>
  );
}

export default App;
