function* getFunc() {
  yield 1;
  yield 2;
  yield 3;
}

for (const a of getFunc()) {
  console.log(a);
}

function* nextFunc() {
  const x = yield 1;
  const y = yield x + 10;
  return x + y;
}

function* fibonacci() {
  let [pre, cur] = [0, 1];
  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
}

const fibo = fibonacci();
for (const num of fibo) {
  if (num >= 10000) break;
  console.log(num);
}
