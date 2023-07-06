import { filter, map, take, reduce, add, square, isOdd } from './utils/index.js';

const log = console.log;

// 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기
function f(list, length) {
  let i = 0;
  let acc = 0;
  for (const a of list) {
    if (a % 2) {
      acc = acc + a ** 2;
      if (++i === length) break;
    }
  }
  log(acc);
}

// 리팩토링 1. Filter (if를 대신함)
function f1(list, length) {
  let i = 0;
  let acc = 0;
  for (const a of filter((a) => a % 2, list)) {
    acc = acc + a ** 2;
    if (++i === length) break;
  }
  log(acc);
}

// 리팩토링 2. Map (새로운 값 생성)
function f2(list, length) {
  let i = 0;
  let acc = 0;
  for (const a of map(
    (a) => a ** 2,
    filter((a) => a % 2, list)
  )) {
    acc = acc + a;
    if (++i === length) break;
  }
  log(acc);
}

// 리팩토링 3. Take (원하는 만큼만 가져오기), log 제거하기 (return으로 변경)
function f3(list, length) {
  let acc = 0;
  for (const a of take(
    length,
    map(
      (a) => a ** 2,
      filter((a) => a % 2, list)
    )
  )) {
    acc = acc + a;
  }
  // 함수형 프로그래밍에서는 최대한 return을 통해 소통하기 (순수함수)
  return acc;
}

// 리팩토링 4. Reduce (최종적으로 하나의 값으로 만들기)
function f4(list, length) {
  // 함수형 프로그래밍에서는 최대한 return을 통해 소통하기 (순수함수)
  return reduce(
    (acc, a) => acc + a,
    0,
    take(
      length,
      map(
        (a) => a ** 2,
        filter((a) => a % 2, list)
      )
    )
  );
}

// 리팩토링 5. reduce의 f와 map의 f를 시그니처가 동일한 순수 함수들로 대체
function f5(list, length) {
  // 함수형 프로그래밍에서는 최대한 return을 통해 소통하기 (순수 함수)
  return reduce(add, 0, take(length, map(square, filter(isOdd, list))));
}

// 리팩토링 6. 함수 표현식으로 변경
// 함수형 프로그래밍은 오른쪽부터 읽으면 됨
const f6 = (list, length) => reduce(add, 0, take(length, map(square, filter(isOdd, list))));

function main() {
  // f3([1, 2, 3, 4, 5], 1);
  // f3([1, 2, 3, 4, 5], 2);
  // f3([1, 2, 3, 4, 5], 3);
  log(f6([1, 2, 3, 4, 5], 1));
  log(f6([1, 2, 3, 4, 5], 2));
  log(f6([1, 2, 3, 4, 5], 3));
}

main();

/* // 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기
function f(list, length) {
  let i = 0;
  let acc = 0;
  for (const a of list) {
    if (a % 2) {
      acc = acc + a ** 2;
      if (++i === length) break;
    }
  }
  log(acc);
}

function main() {
  f([1, 2, 3, 4, 5], 1);
  f([1, 2, 3, 4, 5], 2);
  f([1, 2, 3, 4, 5], 3);
}

main(); */

/* // Filter 만들기 (함수형 프로그래밍에서는 if를 Filter라고 함)
function* filter(f, list) {
  for (const a of list) {
    if (f(a)) yield a;
  }
}

function f(list, length) {
  let i = 0;
  let acc = 0;
  for (const a of filter((a) => a % 2, list)) {
    acc = acc + a ** 2;
    if (++i === length) break;
  }
  log(acc);
}

function main() {
  f([1, 2, 3, 4, 5], 1);
  f([1, 2, 3, 4, 5], 2);
  f([1, 2, 3, 4, 5], 3);
}

main(); */

/* // Map 만들기 (함수형 프로그래밍에서는 무엇인가 새롭게 만들어내는 것을 Map이라 함)
function* filter(f, list) {
  for (const a of list) {
    if (f(a)) yield a;
  }
}

function* map(f, list) {
  for (const a of list) {
    yield f(a);
  }
}

function f(list, length) {
  let i = 0;
  let acc = 0;
  for (const a of map(
    (a) => a ** 2,
    filter((a) => a % 2, list)
  )) {
    acc = acc + a;
    if (++i === length) break;
  }
  log(acc);
}

function main() {
  f([1, 2, 3, 4, 5], 1);
  f([1, 2, 3, 4, 5], 2);
  f([1, 2, 3, 4, 5], 3);
}

main(); */

/* // Take 만들기
// 자바스크립트에서는 순회가 가능한 값을 Iterable이라고 함
function* filter(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
}

function* map(f, iter) {
  for (const a of iter) {
    yield f(a);
  }
}

function take(length, iter) {
  let res = [];
  for (const a of iter) {
    res.push(a);
    // break를 걸어도 좋지만, 함수형 프로그래밍에서는 계속 return을 하는 것이 좋음
    if (res.length === length) return res;
  }
  return res;
}

function f(list, length) {
  let acc = 0;
  for (const a of take(
    length,
    map(
      (a) => a ** 2,
      filter((a) => a % 2, list)
    )
  )) {
    acc = acc + a;
  }
  // 함수형 프로그래밍에서는 return을 하는 것이 좋으며,
  // 외부 세상에 영향을 미칠 수 있는 것은 외부에서 처리하게끔 하기
  // log(acc);
  return acc;
}

function main() {
  log(f([1, 2, 3, 4, 5], 1));
  log(f([1, 2, 3, 4, 5], 2));
  log(f([1, 2, 3, 4, 5], 3));
}

main();
 */

// Reduce 만들기
// 자바스크립트에서는 순회가 가능한 값을 Iterable이라고 함
// function* filter(f, iter) {
//   for (const a of iter) {
//     if (f(a)) yield a;
//   }
// }

// function* map(f, iter) {
//   for (const a of iter) {
//     yield f(a);
//   }
// }

// function take(length, iter) {
//   let res = [];
//   for (const a of iter) {
//     res.push(a);
//     // break를 걸어도 좋지만, 함수형 프로그래밍에서는 계속 return을 하는 것이 좋음
//     if (res.length === length) return res;
//   }
//   return res;
// }

// function reduce(f, acc, iter) {
//   for (const a of iter) {
//     acc = f(acc, a);
//   }
//   return acc;
// }

// function f(list, length) {
//   // 함수형 프로그래밍에서는 return을 하는 것이 좋으며,
//   // 외부 세상에 영향을 미칠 수 있는 것은 외부에서 처리하게끔 하기
//   return reduce(
//     (acc, a) => acc + a,
//     0,
//     take(
//       length,
//       map(
//         (a) => a ** 2,
//         filter((a) => a % 2, list)
//       )
//     )
//   );
// }

// function main() {
//   log(f([1, 2, 3, 4, 5], 1));
//   log(f([1, 2, 3, 4, 5], 2));
//   log(f([1, 2, 3, 4, 5], 3));
// }

// main();
