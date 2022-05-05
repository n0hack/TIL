import React from 'react';

const ViewFlagValue = ({ flag }) => {
  return <p>{flag ? '유효' : '무효'}</p>;
};

export default ViewFlagValue;
