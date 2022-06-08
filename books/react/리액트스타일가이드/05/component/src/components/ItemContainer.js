import React, { useState } from "react";
import ItemList from "./ItemList";
import MainTitle from "./MainTitle";

const createItems = (length) =>
  Array.from({ length }, (_, i) => `item ${i + 1}`);

function ItemContainer() {
  const [items, setItems] = useState(createItems(10));
  return (
    <div>
      <MainTitle text="My Items Page" />
      <ItemList items={items} />
    </div>
  );
}

export default ItemContainer;
