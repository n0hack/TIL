// function foo(x) {
//   function bar(y) {
//     // 30
//     console.log(x + y);
//   }
//   bar(20);
// }
// foo(10);

// function foo(x) {
//   return function bar(y) {
//     console.log(x + y);
//   };
// }
// const adder10 = foo(10);
// adder10(20); // 30

function counter() {
  let counter = 0;

  function increment() {
    counter++;
  }

  function decrement() {
    counter--;
  }

  function getCount() {
    return counter;
  }

  return {
    increment,
    decrement,
    getCount,
  };
}

const myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount()); // 2
