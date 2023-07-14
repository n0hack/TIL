export const curry =
  (f) =>
  (a, ...bs) =>
    bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

export const range = function* (stop) {
  let i = -1;
  while (++i < stop) yield i;
};

export const filter = curry(function* (f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

export const map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

export const take = curry(function (length, iter) {
  const res = [];

  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }
  return res;
});

export const takeWhile = curry(function (f, iter) {
  iter = iter[Symbol.iterator]();
  iter.return = null;

  const res = [];

  return (function recur() {
    for (const a of iter) {
      const b = go1(a, f);

      if (!b) return res;
      if (b instanceof Promise) return b.then(async (b) => (b ? (res.push(await a), recur()) : res));
      res.push(a);
    }
    return res;
  })();
});

export const reduce = curry(function (f, acc, iter) {
  // acc를 생략하는 경우의 스펙도 있음
  if (arguments.length === 2) {
    // 인자가 2개인 경우, acc가 iter이므로 iter의 첫번째 값을 acc로 설정
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

export const add = (a, b) => a + b;

export const square = (a) => a ** 2;

export const isOdd = (a) => a % 2;

// List처럼 순차적으로 동작
// go(10, (a) => a + 1, (a) => a + 10, (a) => a + 100, log);
export const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

// export const go = (...as) => reduce((a, f) => f(a), as);
export const go = (...as) => reduce(go1, as);

export const flat = function* (iter) {
  for (const a of iter) {
    // 배열은 기본적으로 이터러블임
    if (a && a[Symbol.iterator]) {
      // for (const b of a) {
      //   yield b;
      // }
      // 다른 제너레이터 또는 이터러블에 위임할 때 사용하는 문법 yield*
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield*
      yield* a;
    } else {
      yield a;
    }
  }
};

export const delay = (time, a) => new Promise((resolve) => setTimeout(() => resolve(a), time));

export const Lazy = {
  filter,
  map,
  range,
  flat,
};
