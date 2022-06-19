import React from "react";
import LinkButton from "./LinkButton";

function ProductList(props) {
  return <ul>{itemList(props.items)}</ul>;
}

const itemList = (items) => {
  return items.map((item, index) => (
    <li key={index}>
      <p>{item.name}</p>
      <LinkButton url={item.url} label="상품 상세" />
    </li>
  ));
};

export default ProductList;
