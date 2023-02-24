import React, { useState } from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  trigger: React.ReactNode;
}

const Select = ({ label, onChange, trigger, value }: Props) => {
  return (
    <Dropdown label={label} value={value} onChange={onChange}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item>{option}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
