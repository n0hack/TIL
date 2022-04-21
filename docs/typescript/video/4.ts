// Polymorphism
// 한 가지 형태로 다양한 모습을 보여줌 (제네릭)
// 오버로딩도 다형성에 포함됨
type SuperPrint = {
  // (arr: number[]): void;
  // (arr: boolean[]): void;
  // (arr: string []): void;
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
  return arr[0];
};
const superA = superPrint(['A', 'B']);
const superB = superPrint([1, 2, 3]);
const superC = superPrint([true, false]);
const superD = superPrint([true, false, 1, 's']);
console.log(superA, superB, superC, superD);

// 파라미터를 통해 제네릭 타입을 추론
type Test = <T, I>(a: T, b: I) => T;
const testF: Test = (a, b) => {
  console.log(typeof a);
  console.log(typeof b);
  return a;
};
testF(123, 's');

// Reactful Generic
function superPrint2<T>(a: T[]) {
  return a[0];
}
// 타입(<boolean>, ...)을 지워도 알아서 추론함
const superA2 = superPrint2<boolean>([true, false]);
const superB2 = superPrint2<number>([1, 2, 3, 4]);
const superC2 = superPrint2<string>(['a', 'b', 'c']);

type Player4<E> = {
  name: string;
  extraInfo: E;
};
type NicoExtra = { favFood: string };
type NicoPlayer = Player4<NicoExtra>;
// type NicoPlayer = Player4<{ favFood: string }>;
const nico4: NicoPlayer = {
  name: 'nico',
  extraInfo: { favFood: '김치' },
};
const lynn4: Player4<null> = {
  name: 'lynn',
  extraInfo: null,
};

type arrNumbers4 = Array<number>;
let a4: arrNumbers4 = [1, 2, 3];
console.log(a4);

function printAllNumbers(arr: Array<number>) {}
