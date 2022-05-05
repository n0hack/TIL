import React from 'react';
import LinkButton from './LinkButton';

const ProductList = (props) => {
  return <ul>{itemList(props.items)}</ul>;
};

const itemList = (items) => {
  return items.map((item, index) => (
    <li key={index}>
      <p>{item.name}</p>
      {/* 불변인 값은 Molecules 안에 직접 지정해도 됨 */}
      <LinkButton url={item.url} label="상품 상세" />
    </li>
  ));
};

export default ProductList;
