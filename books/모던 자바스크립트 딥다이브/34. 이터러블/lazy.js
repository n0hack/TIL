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
  if (num >= 10000) break;
  console.log(num);
}

const [f1, f2, f3] = fibonacciFunc();
console.log(f1, f2, f3);
