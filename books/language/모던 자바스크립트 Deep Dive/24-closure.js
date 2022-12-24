function foo() {
  const x = 1;
  const y = 2;

  function bar() {
    const z = 3;
    // debugger;
    console.log(z);
  }

  return bar;
}

const bar = foo();
bar();

const increase = (function () {
  let num = 0;

  return function () {
    return ++num;
  };
})();

console.log(increase());
console.log(increase());
console.log(increase());

// 함수형 프로그래밍은 부수 효과를 최대한 억제하기 위해 클로저를 적극 사용
function makeCounter(predicate) {
  let counter = 0;

  return function () {
    counter = predicate(counter);
    return counter;
  };
}

// 보조 함수
const increaser = (n) => ++n;
const decreaser = (n) => --n;

// f1과 f2는 서로 독립된 렉시컬 환경을 가짐
const f1 = makeCounter(increaser);
console.log(f1());
console.log(f1());

const f2 = makeCounter(decreaser);
console.log(f2());
console.log(f2());

var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

for (var index in funcs) {
  console.log(funcs[index]());
}
