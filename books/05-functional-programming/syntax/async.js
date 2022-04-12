const add = wrap(function (a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
});

const sub = wrap(function (a, b, callback) {
  setTimeout(function () {
    callback(a - b);
  }, 1000);
});

const mul = wrap(function (a, b, callback) {
  setTimeout(function () {
    callback(a * b);
  }, 1000);
});

const div = wrap(function (a, b, callback) {
  setTimeout(function () {
    callback(a / b);
  }, 1000);
});

const curry =
  (f) =>
  (a, ...bs) =>
    bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

function wrap(f) {
  return function () {
    return f.apply(null, arguments);
  };
}

console.log(div(sub(add(10, 15), 5), 10));
