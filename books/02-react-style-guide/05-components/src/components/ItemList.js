import React from 'react';

const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
};

export default ItemList;
