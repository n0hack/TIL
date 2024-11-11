import React from 'react';
import PageView from './components/PageView';
import Header from './components/Header';
import TokenBox from './components/TokenBox';

export default class App extends React.Component {
  render() {
    return (
      <PageView>
        <Header title="토큰 충전" />
        <TokenBox chargeType={TokenBox.ChargeType.Primary}/>
        <TokenBox chargeType={TokenBox.ChargeType.Secondary} />
      </PageView>
    )
  }
}