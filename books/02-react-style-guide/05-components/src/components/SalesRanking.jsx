import React, { useState } from 'react';
import ProductList from './ProductList';
import RegionList from './RegionList';
import SectionTitle from './SectionTitle';
import TabPanel from './TabPanel';
import UserList from './UserList';

const SalesRanking = (props) => {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = (index) => setIndex(index);

  return (
    <div>
      <TabPanel changeIndex={handleChangeIndex} current={index}>
        <ProductList items={props.items} />
        <UserList users={props.users} />
        <RegionList regions={props.regions} />
      </TabPanel>
    </div>
  );
};

export default SalesRanking;
