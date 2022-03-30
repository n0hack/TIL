import React from 'react';
import withHOC from './withHOC';

const HOC = ({ name }) => {
  console.log('2. HOC.js');
  return <h2>{name}</h2>;
};

export default withHOC(HOC, 'HOC.js');
