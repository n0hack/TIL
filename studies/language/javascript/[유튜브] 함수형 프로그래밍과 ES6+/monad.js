// Monad
import { go } from './utils/index.js';

/* 
  함수형 프로그래밍은 함수를 합성해 나가는 것이다.
  현실 세계의 수학에서는 f, g라는 함수가 있을 때, f(g(x))와 같이 항상 합성 가능하다.
  - f(g(x)) = f(g(x))

  하지만, 프로그래밍에서는 x가 어떤 상태인지 모르기 때문에 모나드를 통해 함수 합성을 안전하게 할 수 있다.
  - f(g(x)) = x // x가 이상한 경우, f(g(x))가 x와 동일하게끔 하는 목적의 모나드도 있다. (돌아갈 수 있도록 만든, 일종의 규칙)
*/
const g = (a) => a + 1;
const f = (a) => a * a;

// []은 모나드이며, 모나드 안에는 안전하게 합성할 수 있는 map이 구현되어 있음
[1].map(g).map(f).forEach(console.log);
console.log(f(g(1))); // 이렇게 해도 됨

// []안에 값이 없어도 안전하게 사용 가능
[].map(g).map(f).forEach(console.log);

// Promise도 모나드 (정확히는 Promise.resolve)
// 위와 같은 형태에서 체이닝을 then으로만 바꾸면 됨
Promise.resolve(1).then(g).then(f).then(console.log);

// 배열이나 프로미스는 각각 다른 목적을 지닌 모나드임

// 함수형 프로그래밍에서는 모든 것을 항상 값으로서 다루며, 합성되는 함수에서는 그 값을 받아 적절하게 처리하면 됨
const delay = (time, a) => new Promise((resolve) => setTimeout(() => resolve(a), time));
delay(1000, 5).then(console.log);

// then을 연속으로 이어 무엇인가 처리한다는 것에 관점을 두지 말고, 그냥 값이라는 관점으로 보기
// 비동기 값을 변수에 저장할 수도 있고, 확인할 수도 있음 (일급 객체, 일급 함수 등)
const a = delay(1000, 5);
if (true) a.then(console.log);

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

go1(10, console.log);
go1(delay(1000, 5), console.log);

go(Promise.resolve(1000), console.log);
