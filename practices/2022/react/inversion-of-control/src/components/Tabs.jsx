import React, { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const TabContext = createContext();

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <ul className="tab-container">{children}</ul>
    </TabContext.Provider>
  );
};

Tabs.Item = ({ value, children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ctx = useContext(TabContext);
  if (ctx === undefined) {
    throw new Error("<Tabs.Item> 컴포넌트는 <Tabs> 컴포넌트 아래에서만 사용될 수 있습니다.");
  }
  const { selectedTab, setSelectedTab } = ctx;

  return (
    <li onClick={() => setSelectedTab(value)} className={`tab-item ${selectedTab === value ? "selected" : ""}`}>
      {children}
    </li>
  );
};

export default Tabs;
