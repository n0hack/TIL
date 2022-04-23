type Person = {
  address: string;
};

// is 타입가드
const isPerson = (object: any): object is Person => 'address' in object;

let person1: any;
person1 = JSON.parse('{"adress":"25Broadway"}');
console.log(person1.address);

// unknown은 타입 범위를 좁혀서 사용해야 함
let person2: unknown;
person2 = JSON.parse('{"adress":"25Broadway"}');
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

function talkToPet(pet: Pet): string {
  if (pet instanceof Dog) {
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return 'Fish cannot talk, sorry.';
  }
}

const myDog = new Dog('Sammy');
const myFish = new Fish('Marry');
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
