type GreeterParam = (a: string) => void;

function greeter(fn: GreeterParam) {
  fn('Hello World');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

type DescribableFunction = { decription: string; (someArg: number): boolean };
function doSomething(fn: DescribableFunction) {
  console.log(fn.decription + ' returned ' + fn(6));
}

// 제네릭
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([]));

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output) {
  return arr.map(func);
}
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
console.log(parsed);

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // Type 그 자체를 반환해야 하는데, 도달할 수 없음
    return { length: minimum };
  }
}
const arr = minimumLength([1, 2, 3], 6);
console.log(arr);

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1);

const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    const fn = () => {
      this.admin = true;
    };
    fn();
  },
};
user.becomeAdmin();
console.log(user);

// any는 무엇이든 괜찮지만, unknown은 불가능
// a.b(); 할 때 a가 any라면 실행되지만, unknown일 때는 에러

function safeParse(s: string): unknown {
  return JSON.parse(s);
}
console.log(safeParse('"Hello"'));
