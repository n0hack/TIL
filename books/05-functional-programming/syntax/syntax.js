// console.time('push');
// const list1 = [];
// for (let i = 0; i < 10000000; i++) list1.push(i);
// console.timeEnd('push');

// console.time('direct');
// const list2 = [];
// for (let i = 0; i < 10000000; i++) list2[list2.length] = i;
// console.timeEnd('direct');

// flat
const flat = (arr) => {
  return (function f(arr, res) {
    arr.forEach((v) => {
      Array.isArray(v) ? f(v, res) : res.push(v);
    });
    return res;
  })(arr, []);
};
