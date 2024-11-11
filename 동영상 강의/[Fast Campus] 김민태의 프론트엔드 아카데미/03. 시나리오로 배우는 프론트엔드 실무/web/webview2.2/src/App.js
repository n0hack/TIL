import React from 'react';
import { PageView, Header } from '@12shop/components';
import TokenBox from './components/TokenBox';

const App = () => {
  
  return (
    <PageView>
      <Header title="토큰 충전" />
      <TokenBox chargeType={TokenBox.ChargeType.Primary}/>
      <TokenBox chargeType={TokenBox.ChargeType.Secondary} />
    </PageView>
  )
}

export default App;
