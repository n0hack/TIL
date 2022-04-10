const log = console.log;

const curry =
  (f) =>
  (a, ...bs) =>
    bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

// 지연평가
const L = {};

/* 조건 처리: filter 함수 */
L.filter = curry(function* (f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

/* 연산 처리: map 함수 */
L.map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

/* 인자만큼 순회하며 이터러블 생성 
  L.range(INFINITY)를 해도 바로 평가를 하지는 않기에 괜찮음
  필요한 순간에만 평가 진행
*/
L.range = function* (stop) {
  let i = -1;
  while (++i < stop) yield i;
};

/* 함수형 프로그래밍에서는 break보다 return이 좋다 
take 함수를 통해 명령형(어떻게) 코드를 선언적(무엇을)으로 사용 가능
*/
const take = curry(function (length, iter) {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }
  return res;
});

const takeWhile = curry(function (f, iter) {
  iter = iter[Symbol.iterator]();
  iter.return = null;
  let res = [];
  return (function recur() {
    for (const a of iter) {
      const b = go1(a, f);
      if (!b) return res;
      if (b instanceof Promise)
        return b.then(async (b) => (b ? (res.push(await a), recur()) : res));
      res.push(a);
    }
    return res;
  })();
});

const reduce = curry(function (f, acc, iter) {
  /* 인자가 2개인 경우, acc가 iter이므로
    acc에 이터레이터를 구현하고, acc는 첫번째 value로 처리
  */
  if (arguments.length === 2) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

const add = curry((a, b) => a + b);

/* 자바스크립트에서는 함수 역시 값(일급객체)이기 때문에 
재밌는 처리가 가능하다. (우->좌가 아닌, 좌->우로 읽을 수 있도록 함)*/
const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
const go = (...as) => reduce(go1, as);

const delay = (time, a) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(a), time);
  });

L.flat = function* (iter) {
  for (const a of iter) {
    // 이터러블(Array보다 추상화 레벨이 높은 값)한 값인지 판단
    if (a && a[Symbol.iterator]) yield* a;
    else yield a;
  }
};

const Impt = {
  payments: {
    0: [
      { iid: 11, oid: 1 },
      { iid: 12, oid: 2 },
      { iid: 13, oid: 3 },
    ],
    1: [
      { iid: 14, oid: 4 },
      { iid: 15, oid: 5 },
      { iid: 16, oid: 6 },
    ],
    2: [
      { iid: 17, oid: 7 },
      { iid: 18, oid: 8 },
    ],
    3: [],
    4: [],
    5: [
      { iid: 19, oid: 9 },
      { iid: 20, oid: 10 },
    ],
    // ...
  },
  getPayments: (page) => {
    console.log(`http://..?page=${page}`);
    return delay(100, Impt.payments[page]);
  },
  cancelPayment: (paymentId) => Promise.resolve(`${paymentId}: 취소완료`),
};

const getOrders = (ids) => delay(100, [{ id: 1 }, { id: 3 }, { id: 7 }]);

async function job() {
  const payments = await go(
    L.range(Infinity),
    L.map(Impt.getPayments),
    takeWhile((ps) => ps.length),
    L.flat,
    take(Infinity)
  );

  const orderIds = await go(
    payments,
    L.map((p) => p.oid),
    take(Infinity),
    getOrders,
    L.map((o) => o.id),
    take(Infinity)
  );

  return Promise.all(
    go(
      payments,
      L.filter((p) => !orderIds.includes(p.oid)),
      L.map((p) => p.iid),
      take(Infinity),
      L.map(Impt.cancelPayment),
      take(Infinity)
    )
  );
}

async function recur() {
  Promise.all([delay(1000 * 3), job().then(log)]).then(recur);
}
recur();
