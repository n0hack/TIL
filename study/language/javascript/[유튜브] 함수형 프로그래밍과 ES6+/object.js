import { Lazy, add, go, reduce, take } from './utils/index.js';

// 일상에서는 주로 객체를 다루는데, 이런 경우 함수형 프로그래밍을 어떻게 적용할 수 있을까?
const users = [
  {
    name: 'a',
    age: 21,
    family: [
      { name: 'a1', age: 53 },
      { name: 'a2', age: 47 },
      { name: 'a3', age: 16 },
      { name: 'a4', age: 14 },
    ],
  },
  {
    name: 'b',
    age: 24,
    family: [
      { name: 'b1', age: 58 },
      { name: 'b2', age: 51 },
      { name: 'b3', age: 10 },
      { name: 'b4', age: 22 },
    ],
  },
  {
    name: 'c',
    age: 31,
    family: [
      { name: 'c1', age: 64 },
      { name: 'c2', age: 62 },
    ],
  },
  {
    name: 'd',
    age: 20,
    family: [
      { name: 'd1', age: 42 },
      { name: 'd2', age: 42 },
      { name: 'd3', age: 11 },
      { name: 'd4', age: 7 },
    ],
  },
];

go(
  users,
  Lazy.map((u) => u.family),
  Lazy.flat,
  Lazy.filter((u) => u.age < 20),
  Lazy.map((u) => u.age),
  take(3),
  reduce(add),
  console.log
);
