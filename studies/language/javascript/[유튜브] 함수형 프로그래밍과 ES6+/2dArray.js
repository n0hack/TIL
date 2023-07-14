import { Lazy as L, add, curry, go, reduce, take } from './utils/index.js';

const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

// 순회만 하고, 뭘 할지는 위임하는 식으로
go(
  arr,
  L.flat,
  L.filter((a) => a % 2),
  L.map((a) => a * a),
  take(3),
  reduce(add),
  console.log
);

// console.log(curry(add)(1, 2));
