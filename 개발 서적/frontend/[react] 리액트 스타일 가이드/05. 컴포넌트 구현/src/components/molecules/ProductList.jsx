import LinkButton from '../atoms/LinkButton';

const ProductList = (props) => {
  return <ul>{itemList(props.items)}</ul>;
};

const itemList = (items) => {
  return items.map((item, index) => {
    return (
      <li key={index}>
        <p>{item.name}</p>
        <LinkButton url={item.url} label="상품 상세" />
      </li>
    );
  });
};

export default ProductList;
