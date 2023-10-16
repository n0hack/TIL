import React, { createContext, useContext, useState } from 'react';

const FlyoutContext = createContext();

const Flyout = (props) => {
  const [open, toggle] = useState(false);
  const providerValue = { open, toggle };

  return <FlyoutContext.Provider value={providerValue}>{props.children}</FlyoutContext.Provider>;
};

const Toggle = () => {
  const { open, toggle } = useContext(FlyoutContext);

  return <div onClick={() => toggle(!open)}>{open ? 'Open' : 'Close'}</div>;
};

const List = ({ children }) => {
  const { open } = useContext(FlyoutContext);

  return open && <ul>{children}</ul>;
};

const Item = ({ children }) => {
  return <li>{children}</li>;
};

Flyout.Toggle = Toggle;
Flyout.List = List;
Flyout.Item = Item;

export default Flyout;
