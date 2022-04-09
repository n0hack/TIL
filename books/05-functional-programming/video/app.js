/* 유인동 CTO님 강의 */
const log = console.log;

// 자바스크립트에서는 배열, 리스트보다는 iterable이라 부름 (순회 가능한 요소에 대한 추상)

/* 조건 처리: filter 함수 */
function* filter(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
}

/* 연산 처리: map 함수 */
function* map(f, iter) {
  for (const a of iter) {
    yield f(a);
  }
}

/* 함수형 프로그래밍에서는 break보다 return이 좋다 
take 함수를 통해 명령형(어떻게) 코드를 선언적(무엇을)으로 사용 가능
*/
function take(length, iter) {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }
  return res;
}

function reduce(f, acc, iter) {
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}

// 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기
/* 함수형 프로그래밍에서는 인자와 리턴값을 통해서만 소통하는 것이 좋음 */
function f(list, length) {
  return reduce(
    (a, b) => a + b,
    0,
    take(
      length,
      map(
        (x) => x ** 2,
        filter((x) => x % 2, list)
      )
    )
  );
}

log(f([1, 2, 3, 4, 5], 1));
log(f([1, 2, 3, 4, 5], 2));
log(f([1, 2, 3, 4, 5], 3));
