import React from 'react';
import { css } from '../styled-system/css';
import { Card } from './components/card';
import { List } from './components/list';
import { Button } from './components/button';
import { CustomComponent } from './components/custom-component';

const style = css({
  fontSize: '2xl',
  '& span': {
    color: 'pink.400',
  },
  desktop: {
    color: 'blue',
  },
});

function App() {
  return (
    <React.Fragment>
      <div className={style}>
        <p className={css({ fontWeight: 700 })}>안녕</p>
        <p className={css({ color: 'primary' })}>Bliss River</p>
        <p className={css({ color: 'bliss.50' })}>Bliss Alizarin</p>
        <span>Span</span>
      </div>
      <Card title="카드" description="lorem ipsum" css={{ bg: 'blue.400' }} />
      <List list={['item1', 'item2', 'item3']} />
      <div className="group">그룹 테스트</div>
      <div className="group">
        <span className={css({ _groupHover: { bg: 'red.500' } })}>Hover me</span>
      </div>
      <div>
        <p className={css({ _peerHover: { bg: 'red.500' } })}>I'll change by bg</p>
        <p className="peer">Hover me</p>
        <p className={css({ _peerHover: { bg: 'red.500' } })}>I'll change by bg</p>
      </div>
      <div data-loading className={css({ _loading: { color: 'red' } })}>
        안녕
      </div>
      <Button size="small" color="primary" css={css({ color: 'red.400' })}>
        클릭!
      </Button>
      <CustomComponent mt="4" test="hi" color="red" className="lucid" css={{ fontWeight: '700' }} />
    </React.Fragment>
  );
}

export default App;
