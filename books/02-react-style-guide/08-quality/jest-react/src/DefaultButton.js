import React from 'react';

const DefaultButton = ({ onClick, label }) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default DefaultButton;
