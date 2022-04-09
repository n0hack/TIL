/* 유인동 CTO님 강의 */
const log = console.log;

// 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기
function f(list, length) {
  let i = 0;
  let acc = 0;
  for (const a of list) {
    if (a % 2) {
      acc = acc + a * a;
      if (++i === length) break;
    }
  }
  log(acc);
}

f([1, 2, 3, 4, 5], 1);
f([1, 2, 3, 4, 5], 2);
f([1, 2, 3, 4, 5], 3);
