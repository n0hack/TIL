/* 유인동 CTO님 강의 */
const log = console.log;

// 자바스크립트에서는 배열, 리스트보다는 iterable이라 부름 (순회 가능한 요소에 대한 추상)

/* 커링 적용 
커링은 f(a,b,c)를 f(a)(b)(c) 와 같이 다중 callable 프로세스 형태로 변환하는 기술입니다.
여러 번 끊어서 실행 가능해짐
*/
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
const go = (...as) => reduce((a, f) => f(a), as);

// 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기
/* 함수형 프로그래밍에서는 인자와 리턴값을 통해서만 소통하는 것이 좋음 
한 문장으로 표현 가능하다는 것은 간결한 화살표 함수로 한 줄 표현 가능함 */
const f = (list, length) =>
  reduce(
    add,
    0,
    take(
      length,
      map(
        (x) => x ** 2,
        filter((x) => x % 2, list)
      )
    )
  );

const f2 = (list, length) =>
  go(
    list,
    L.filter((x) => x % 2),
    L.map((x) => x ** 2),
    take(length),
    reduce(add)
  );

// 제너레이터 덕에 기본적으로 지연평가를 하게 되어, 성능에 이점을 가져옴
// 필요한 순간에만 평가 연산 발생. 만약 지연평가를 하지 않는다면, 명령형 코드가 훨씬 성능 좋음
log(f2([1, 2, 3, 4, 5], 1));
log(f2([1, 2, 3, 4, 5], 2));
log(f2([1, 2, 3, 4, 5], 3));
log(f2(L.range(Infinity), 200));

/* 
  2차원 배열을 함수형 프로그래밍에서 다루는 방법 
  기존 명령형 프로그래밍으로 작성하면 i++, j++을 사용하게 되는데,
  이 때문에 에러가 발생하는 경우가 많다.

  함수형 프로그래밍에서는 조회/순회 정도만 분리하고, 동작은 다른 함수에게 위임함
*/
const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

L.flat = function* (iter) {
  for (const a of iter) {
    // 이터러블(Array보다 추상화 레벨이 높은 값)한 값인지 판단
    if (a && a[Symbol.iterator]) yield* a;
    else yield a;
  }
};

go(
  arr,
  L.flat,
  L.filter((x) => x % 2),
  L.map((x) => x ** 2),
  take(3),
  reduce(add),
  log
);

/* 유저 목록 : 실무 예시 */
const users = [
  {
    name: 'a',
    age: 21,
    family: [
      { name: 'a1', age: 53 },
      { name: 'a2', age: 47 },
      { name: 'a3', age: 16 },
      { name: 'a4', age: 14 },
    ],
  },
  {
    name: 'b',
    age: 24,
    family: [
      { name: 'b1', age: 58 },
      { name: 'b2', age: 51 },
      { name: 'b3', age: 10 },
      { name: 'b4', age: 22 },
    ],
  },
  {
    name: 'c',
    age: 31,
    family: [
      { name: 'c1', age: 64 },
      { name: 'c2', age: 62 },
    ],
  },
  {
    name: 'd',
    age: 20,
    family: [
      { name: 'd1', age: 42 },
      { name: 'd2', age: 42 },
      { name: 'd3', age: 11 },
      { name: 'd4', age: 7 },
    ],
  },
];

go(
  users,
  L.map((u) => u.family),
  L.flat,
  L.filter((u) => u.age < 20),
  L.map((u) => u.age),
  take(2),
  reduce(add),
  log
);
