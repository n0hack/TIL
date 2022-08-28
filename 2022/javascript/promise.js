Promise.myPromiseAll = (promises = []) => {
  return new Promise((resolve, reject) => {
    let count = promises.length;
    const ret = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          ret[index] = value;
          count--;
          !count && resolve(ret);
        })
        .catch(reject);
    });
  });
};

Promise.myPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    let finish = false;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          if (!finish) resolve(value);
        })
        .catch(reject);
    });
  });
};

Promise.myPromiseAllSettled = (promises = []) => {
  return new Promise((resolve) => {
    let count = promises.length;
    const ret = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          ret[index] = { status: "fullfilled", value };
          count--;
        })
        .catch((e) => {
          ret[index] = { status: "rejected", reason: e };
          count--;
        })
        .finally(() => !count && resolve(ret));
    });
  });
};

const p1 = new Promise((resolve) => setTimeout(() => resolve(3000), 3000));
const p2 = new Promise((resolve) => setTimeout(() => resolve(2000), 2000));
const p3 = Promise.reject(1000);

Promise.myPromiseAll([p1, p2, 3]).then(console.log).catch(console.error);
Promise.myPromiseRace([p1, p2]).then(console.log);
Promise.myPromiseRace([p1, p2, 3]).then(console.log);
Promise.myPromiseRace([p1, p2, p3]).then(console.log).catch(console.error);
Promise.myPromiseAllSettled([p1, p2, p3]).then(console.log).catch(console.error);
