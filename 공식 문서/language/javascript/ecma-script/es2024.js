const products = [
  {
    name: 'IPhone',
    category: 'phone',
    price: 1000,
  },
  {
    name: 'Galaxy',
    category: 'phone',
    price: 800,
  },
  {
    name: 'MacBook',
    category: 'laptop',
    price: 1500,
  },
  {
    name: 'iPad',
    category: 'tablet',
    price: 1200,
  },
];

// Object.groupBy, Map.groupBy
// 배열과 같은 이터러블을 그룹화하는 메서드
console.log(Object.groupBy(products, (product) => product.category));
console.log(Map.groupBy(products, (product) => product.category));
