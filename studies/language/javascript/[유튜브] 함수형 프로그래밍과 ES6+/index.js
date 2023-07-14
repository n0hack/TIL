import { Lazy as L, filter, map, take, reduce, add, square, isOdd, go } from './utils/index.js';

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
// 잘 읽히지 않는다면, prettier를 끄고 함수 단위로 잘라도 좋을 듯
// prettier-ignore
const f6 = (list, length) => 
  reduce(add, 0, 
    take(length, 
      map(square, 
        filter(isOdd, list))));

// 리팩토링 7. Go를 통해 읽기 좋게 변경
const f7 = (list, length) =>
  go(
    list,
    (list) => filter(isOdd, list),
    (list) => map(square, list),
    (list) => take(length, list),
    (list) => reduce(add, 0, list)
  );

// 리팩토링 8. Currying
const f8 = (list, length) => go(list, L.filter(isOdd), L.map(square), take(length), reduce(add));

function main() {
  // f3([1, 2, 3, 4, 5], 1);
  // f3([1, 2, 3, 4, 5], 2);
  // f3([1, 2, 3, 4, 5], 3);

  // generator는 기본적으로 지연 평가이기 때문에, 필요한 만큼만 연산 수행
  // 그래서 명령형 코드로 작성할 때와 시간 복잡도가 완전하게 동일함
  log(f8([1, 2, 3, 4, 5], 1));
  log(f8([1, 2, 3, 4, 5], 2));
  log(f8([1, 2, 3, 4, 5], 3));

  // reduce 리팩토링
  // log(reduce(add, 10, [1, 2, 3, 4, 5]));

  // 지연 평가에 대한 예시
  [...L.range(5)]; // 평가 됨
  L.range(5); // 평가 안 됨 (suspense 상태)
  log(f8(L.range(Infinity), 5));
}

main();
