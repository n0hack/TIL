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
