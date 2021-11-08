class Animal {
  #numOflegs;

  // 생성자 (초기값)
  constructor(name, numOflegs = 2) {
    this.name = name;
    this.#numOflegs = numOflegs;
  }

  walk() {
    console.log('걷다');
  }
}

class Cat extends Animal {
  constructor(name, numOflegs, species) {
    super(name, numOflegs);
    this.species = species;
  }

  walk() {
    console.log('여유롭게 걷기');
  }
}

const cat = new Animal('Tom', 2);
const cat2 = new Cat('Tom', 2, '러블');
cat.walk();
cat2.walk();
