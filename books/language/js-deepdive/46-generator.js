const fibo = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

for (const num of fibo) {
  if (num > 10000) return;
  console.log(num);
}
