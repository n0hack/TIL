// const fibonacci = {
//   [Symbol.iterator]() {
//     let [pre, cur] = [0, 1];
//     const max = 10;

//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];
//         return {
//           value: cur,
//           done: cur >= max,
//         };
//       },
//     };
//   },
// };

// for (const num of fibonacci) {
//   console.log(num);
// }

// 무한 이터러블과 지연평가
const fibonacciFunc = function () {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur };
    },
  };
};

for (const num of fibonacciFunc()) {
  if (num > 10000) break;
  console.log(num);
}

const [f1, f2, f3, f4, f5] = fibonacciFunc();
console.log(f1, f2, f3, f4, f5);
