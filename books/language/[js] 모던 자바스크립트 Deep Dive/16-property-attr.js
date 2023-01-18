// 내부 슬롯과 내부 메서드는 직접 참조 불가능하기 때문에, 간접적으로 참조해야 함
// [[Prototype]] 내부 슬롯은 __proto__ 접근자 프로퍼티로 간접적으로 참조 가능
const o = {};
console.log(o.__proto__);

const person = {
  firstName: "jihun",
  lastName: "Jeon",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

const myPerson = {};
Object.defineProperties(myPerson, {
  firstName: {
    value: "jihun",
    writable: false,
    enumerable: true,
    configurable: true,
  },
});
// 수정 불가
myPerson.firstName = "jihun2";
console.log(Object.getOwnPropertyDescriptor(myPerson, "firstName"));
console.log(myPerson);
