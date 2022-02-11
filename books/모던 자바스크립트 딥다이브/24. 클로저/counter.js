const counter = (function () {
  let counter = 0;

  return (predicate) => {
    counter = predicate(counter);
    return counter;
  };
})();

function increase(n) {
  return n + 1;
}

function decrease(n) {
  return n - 1;
}

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(decrease));
