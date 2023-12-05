function User(name) {
  this.say = function () {
    console.log(`hello`);
  };
}

User.prototype.say2 = function () {
  console.log(`hello`);
};

const lucid = new User();
const dante = new User();

console.log(lucid.say === dante.say); // false (인스턴스 메소드)
console.log(lucid.say2 === dante.say2); // true (프로토타입 공유)
