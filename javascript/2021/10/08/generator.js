import fetch from 'node-fetch';

// 제너레이터 함수는 동작 도중 일시적으로 Caller에게 권한을 양도(yield)할 수 있음
// 제너레이터는 이터러블이면서 동시에 이터레이터인 제너레이터 객체를 반환함
function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = genFunc();
console.log(typeof generator, generator);
// 모든 내용이 yield된 이후에는 { value: undefined, done: true }를 반환함
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// next 메소드를 통해 callee에게 값을 넘겨줄 수 있으며, 바로 할당되는 것이 아닌
// 그 다음 next에 의해 값이 정해짐
function* genFunc2() {
  const x = yield 1; // yield가 할당되는 것이 아님
  const y = yield x + 10;
  return x + y;
}

const generator2 = genFunc2();
let res = generator2.next();
console.log(res); // { value: 1, done: false }
res = generator2.next(10);
console.log(res); // { value: 20, done: false }
res = generator2.next(20);
console.log(res); // { value: 30, done: true }

const fibonacci = function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield pre;
  }
};

for (const num of fibonacci()) {
  if (num >= 100) break;
  console.log(num);
}

// 제너레이터 실행기
const async = (generatorFunc) => {
  const generator = generatorFunc();

  const onResolved = (args) => {
    const result = generator.next(args);

    return result.done
      ? result.value
      : result.value.then((res) => onResolved(res));
  };

  return onResolved;
};

async(function* fetchTodo() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const response = yield fetch(url);
  const todo = yield response.json();
  console.log(todo);
})();
