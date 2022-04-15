/* 
string, number, boolean, 
array: number[], Array<number>
tuple: [number]
any: 타입 검사를 하지 않는 타입 (특정 라인에 문제가 없다는 것을 알리고 싶을 때 사용할 수 있으나, 별로 좋은 상황은 아님) <-- noImplictAny 컴파일러 플래그 활성화로 방지
*/

function greeting(name: string) {
  console.log(`hello, ${name.toUpperCase()} !`);
}
greeting('NoHack');

// 반환타입도 타입 지정이 가능하나, 알아서 추론해 주므로 굳이 작성하지 않아도 됨
function getNumber(): number {
  return 20;
}
console.log(getNumber());

// 타입스크립트가 문맥을 확인하여 자동으로 익명함수에 타입 부여
const names = ['AB', 'CD', 'EF'];
names.forEach((name) => console.log(name.toUpperCase()));

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// 옵셔널 프로퍼티 (없어도 되는 프로퍼티)
function printName(obj: { firstname: string; last?: string }) {}
printName({ firstname: 'Jihun' });
printName({ firstname: 'Jihun', last: 'Jeon' });

// 유니온 |
function printId(id: number | string) {
  // 둘 모두가 참조 가능한 메서드만 사용 가능하지만,
  // 조건을 걸어 타입 체크 후 각 타입에 맞는 메서드 사용 가능
  if (typeof id === 'number') {
    console.log(id);
  } else if (typeof id === 'string') {
    console.log(id.toUpperCase());
  }
}
printId(1);
printId('1');

// 타입 별칭 (같은 타입을 재사용하고 싶을 때)
type Point = {
  x: number;
  y: number;
};
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });

declare function getInput(): string;
declare function sanitize(str: string): string;
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
let userInput = sanitizeInput(getInput());
userInput = 'new Input';
