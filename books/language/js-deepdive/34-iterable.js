const fibonacciFunc = (max) => {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { done: pre >= max, value: pre };
        },
      };
    },
  };
};

for (const n of fibonacciFunc(100)) {
  console.log(n);
}

// 이터러블은 자동으로 지연 평가를 함
const fibo = () => {
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

const [f1, f2, f3] = fibo();
console.log(f1, f2, f3);
