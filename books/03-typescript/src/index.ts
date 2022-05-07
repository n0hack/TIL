// 모든 타입을 가질 수 있는 객체
type ValidatorFn = (c: FormControl) => { [key: string]: any } | null;

class FormControl {
  constructor(initialValue: string, validator: ValidatorFn | null) {}
}

// 타입스크립트는 구조적 타입 시스템을 가지고 있기 때문에, 구조만을 가지고 호환성을 체크함
interface Person {
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
savePerson(p);
