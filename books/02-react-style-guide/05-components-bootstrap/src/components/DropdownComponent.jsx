import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const DropdownComponent = () => {
  return (
    <DropdownButton title="DropdownSample">
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Item>Item 3</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropdownComponent;
