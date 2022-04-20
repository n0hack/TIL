// Readonly props
interface SomeType {
  readonly prop: string;
}
const obj: SomeType = { prop: '123' };

// Index Signatures
interface StringArray {
  [index: number]: string;
}
const myArray: StringArray = ['s0', 's1', 's2'];
const secondItem = myArray[1];

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {}
draw({ color: 'blue', radius: 1 });
draw({ color: 'red', radius: 1 });

interface Box {
  contents: unknown;
}
let x1: Box = {
  contents: 'hello',
};
console.log(x1.contents);

// any는 어떠한 타입도 가질 수 있다. (타입 검사 x)
// unknown은 모든 타입의 슈퍼셋이지만, 이후 다시 사용할 때 타입 선언이 필요하다.
// never는 모든 타입의 하위셋이고, 어떠한 타입도 가질 수 없다. (도달할 수 없는 함수나 타입 추론 예외를 제거할 때)
type NonString<T> = T extends string ? never : T;

// string은 에러 발생
// const testNS: NonString<string> = 'hi';
// console.log(testNS);

// read-only
const pair: readonly [string, number] = ['hi', 2];
let pair2 = ['hi', 2] as const;
