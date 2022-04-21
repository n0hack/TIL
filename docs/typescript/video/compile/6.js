"use strict";
const nico6 = {
    nickname: 'nico',
    healthBar: 10,
    team: 'blue',
};
const kimchi6 = 'delicious';
const nico66 = { name: 'nico' };
console.log(nico66);
// 인터페이스를 구현하는 implements
// 추상클래스를 상속해서 구현하는 것과 같으며 더욱 가벼움
// 인터페이스를 구현할 때는 프로퍼티의 접근제어자를 private/protected로 할 수 없음
class PlayerClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.fullName()}`;
    }
}
// 인터페이스는 다중 구현이 가능
// class Player implements User, Human {}
