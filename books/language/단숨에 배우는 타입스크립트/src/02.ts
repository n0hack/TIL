namespace ch02 {
  // 타입과 인터페이스는 컴파일 시 자바스크립트로 변환되지 않음
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

  function area(s: Shape): number {
    switch (s.kind) {
      case 'rectangle':
        return s.width * s.height;
      case 'circle':
        return Math.PI * s.radius ** 2;
    }
  }

  const myRectangle: Rectangle = { kind: 'rectangle', width: 10, height: 20 };
  console.log(area(myRectangle));

  class Dog {
    constructor(readonly name: string) {}

    sayHello(): string {
      return 'Dog says hello';
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
    } else {
      return "Fish can't talk, sorry";
    }
  }

  const myDog = new Dog('Sammy');
  const myFish = new Fish('Marry');

  console.log(talkToPet(myDog));
  console.log(talkToPet(myFish));
}
