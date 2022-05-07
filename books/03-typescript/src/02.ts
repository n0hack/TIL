// 조건문을 이용해 타입을 구분하는 것을 타입 축소(Type Narrowing)라 함
function padLeft(value: string, padding: any): string {
  if (typeof padding === 'number') return Array(padding + 1).join('') + value;
  if (typeof padding === 'string') return padding + value;
  throw new Error(`Expected string or number, got '${padding}'.`);
}
console.log(padLeft('Hello World', 4));
console.log(padLeft('Hello World', 'John says'));
console.log(padLeft('Hello World', true)); // Error 발생

// 웬만해서는 any를 쓰지 않는 것이 좋음
/* function padLeft(value: string, padding: number | string): string {
  if (typeof padding === 'number') return Array(padding + 1).join('') + value;
  else if (typeof padding === 'string') return padding + value;
  else {
    return padding;
  }
}
console.log(padLeft('Hello World', 4));
console.log(padLeft('Hello World', 'John says'));
 */

// 모든 타입을 가질 수 있는 객체
type ValidatorFn = (c: FormControl) => { [key: string]: any } | null;

class FormControl {
  constructor(initialValue: string, validator: ValidatorFn | null) {}
}

// 타입스크립트는 구조적 타입 시스템을 가지고 있기 때문에, 구조만을 가지고 호환성을 체크함
/* interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function savePerson(person: Person) {
  console.log('Saving ', person);
}

const p = {
  firstName: 'Jihun',
  lastName: 'Jeon',
  age: 29,
};
savePerson(p); */

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Rectangle | Circle;

function area(shape: Shape) {
  switch (shape.kind) {
    case 'rectangle':
      return shape.height * shape.width;
    case 'circle':
      return shape.radius ** 2 * Math.PI;
  }
}
const myRectangle: Rectangle = { kind: 'rectangle', width: 10, height: 20 };
const myCircle: Circle = { kind: 'circle', radius: 10 };
console.log(area(myRectangle));
console.log(area(myCircle));

// 타입 가드
type Person = {
  address: string;
};

let person1: any;
person1 = JSON.parse('{"adress": "25 Broadway"}');
console.log(person1.address);

// unknown은 타입을 좁혀야 함
// 그렇지 않으면 컴파일 에러 발생
let person2: unknown;
person2 = JSON.parse('{"adress": "25 Broadway"}');

const isPerson = (object: any): object is Person =>
  !!object && 'address' in object;
if (isPerson(person2)) {
  console.log(person2.address);
} else {
  console.log('person2 is not a Person');
}

class Dog {
  constructor(readonly name: string) {}
  sayHello(): string {
    return 'Dog says hello!';
  }
}

class Fish {
  constructor(readonly name: string) {}
  dive(howDeep: number): string {
    return `Diving ${howDeep} feet`;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet) {
  if (pet instanceof Dog) return pet.sayHello();
  else if (pet instanceof Fish) return 'Fish connot talk, sorry.';
}
