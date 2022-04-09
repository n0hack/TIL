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

/* 조건 처리: filter 함수 */
const filter = curry(function* (f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

/* 연산 처리: map 함수 */
const map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

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
    filter((x) => x % 2),
    map((x) => x ** 2),
    take(length),
    reduce(add)
  );

// 제너레이터 덕에 기본적으로 지연평가를 하게 되어, 성능에 이점을 가져옴
// 필요한 순간에만 평가 연산 발생. 만약 지연평가를 하지 않는다면, 명령형 코드가 훨씬 성능 좋음
log(f2([1, 2, 3, 4, 5], 1));
log(f2([1, 2, 3, 4, 5], 2));
log(f2([1, 2, 3, 4, 5], 3));
