import React from 'react';

const PrimaryButton = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default PrimaryButton;
