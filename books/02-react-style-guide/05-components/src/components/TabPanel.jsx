import React from 'react';

const TabPanel = (props) => {
  const tabs = props.children.map((comp, index) => (
    <div
      key={index}
      style={{ display: props.current === index ? 'block' : 'none' }}
    >
      {comp}
    </div>
  ));

  const tabLabel = (
    <div>
      <button onClick={() => props.changeIndex(0)}>상품리스트</button>
      <button onClick={() => props.changeIndex(1)}>회원리스트</button>
      <button onClick={() => props.changeIndex(2)}>지역리스트</button>
    </div>
  );

  return (
    <div>
      {tabLabel}
      {tabs}
    </div>
  );
};

export default TabPanel;
