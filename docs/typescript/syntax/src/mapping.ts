interface Person {
  name: string;
  age: number;
  address?: string;
}

type ReadOnly<T> = {
  readonly // 인덱스 타입 쿼리 keyof
  // 룩업 타입 T[P] 프로퍼티의 타입
  [P in keyof T]: T[P];
};

const worker: Person = { name: 'John', age: 23 };
function doStuff(person: ReadOnly<Person>) {
  // person.age = 25;
}

function filterBy<T>(property: any, value: any, array: T[]) {
  return array.filter((item) => item[property] === value);
}

const persons: Person[] = [
  { name: 'John', age: 22 },
  { name: 'Mary', age: 23 },
];

console.log(filterBy('name', 'John', persons));
console.log(filterBy('lastName', 'John', persons));
console.log(filterBy('age', 'twenty', persons));

function filterBy2<T, P extends keyof T>(property: P, value: T[P], array: T[]) {
  return array.filter((item) => item[property] === value);
}

console.log(filterBy2('name', 'John', persons));
// console.log(filterBy2('lastName', 'John', persons));
// console.log(filterBy2('age', 'twenty', persons));

type Modifiable<T> = {
  -readonly [P in keyof T]: T[P];
};

const worker2: Readonly<Partial<Person>> = { name: 'Johnn' };

type PersonNameAddress<T, K> = Pick<Person, 'name' | 'address'>;
