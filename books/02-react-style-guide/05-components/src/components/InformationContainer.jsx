import React, { useState } from 'react';
import InformationArea from './InformationArea';

const InformationContainer = () => {
  const [contact, setContact] = useState({
    tel: '1111-1111',
    mail: 'taro@example.com',
    organization: 'AAA Company',
    account: 'taro@fb.com',
  });

  return <InformationArea {...contact} />;
};

export default InformationContainer;
