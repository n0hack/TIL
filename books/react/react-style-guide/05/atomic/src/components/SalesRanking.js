import React, { useState } from "react";
import ProductList from "./ProductList";
import RegionList from "./RegionList";
import SectionTitle from "./SectionTitle";
import TabPanel from "./TabPanel";
import UserList from "./UserList";

function SalesRanking(props) {
  const [current, setCurrent] = useState(0);
  const handleChangeCurrent = (index) => setCurrent(index);

  return (
    <div>
      <TabPanel changeIndex={handleChangeCurrent} current={current}>
        <ProductList items={props.items} />
        <UserList users={props.users} />
        <RegionList regions={props.regions} />
      </TabPanel>
    </div>
  );
}

export default SalesRanking;
