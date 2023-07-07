import { Lazy, delay, go, take, takeWhile } from './utils/index.js';

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
  },
  getPayments: (page) => {
    console.log(`http://..?page=${page}`);
    return delay(1000 * 2, Impt.payments[page]);
  },
  cancelPayment: (paymentId) => Promise.resolve(`${paymentId}: 취소완료`),
};

const getOrders = (ids) => delay(100, [{ id: 1 }, { id: 3 }, { id: 7 }]);

async function job() {
  const payments = await go(
    Lazy.range(Infinity),
    Lazy.map(Impt.getPayments),
    takeWhile((ps) => ps.length),
    Lazy.flat,
    take(Infinity)
  );

  const orderIds = await go(
    payments,
    Lazy.map((p) => p.oid),
    take(Infinity),
    getOrders,
    Lazy.map((o) => o.id),
    take(Infinity)
  );

  return Promise.all(
    go(
      payments,
      Lazy.filter((p) => !orderIds.includes(p.oid)),
      Lazy.map((p) => p.iid),
      Lazy.map(Impt.cancelPayment),
      take(Infinity)
    )
  );
}

async function recur() {
  Promise.all([delay(1000 * 3), job().then(console.log)]).then(recur);
}

recur();
