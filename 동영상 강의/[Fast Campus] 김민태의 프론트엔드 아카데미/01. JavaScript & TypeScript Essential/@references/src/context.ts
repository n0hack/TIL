namespace Context {
  class Person {
    constructor(public name: string, public age: number) {
      // context 고정
      this.getAge = this.getAge.bind(this);
    }

    getAge() {
      return this.age;
    }

    // 화살표 함수로 만들게 되면, Lexical Context를 가지게 되므로, 생성과 동시에 this가 고정됨
    getName = () => {
      return this.name;
    };
  }

  const p1 = new Person('Lucid', 30);
  const myAge = p1.getAge;

  // context가 없어서 원래는 에러가 발생함 (this = undefined)
  // 그렇기 때문에 생성자 안에서 bind를 통해 context를 고정해줘야 함
  myAge();

  const x = p1.getName;
  x();
}
