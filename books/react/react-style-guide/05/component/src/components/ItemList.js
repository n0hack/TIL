import React from "react";

function ItemList(props) {
  return (
    <ul>
      {props.items.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
}

export default ItemList;
