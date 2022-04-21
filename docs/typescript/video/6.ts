type Nickname6 = string;
type Health6 = number;
type Friends6 = Array<string>;
type Team6 = 'red' | 'blue' | 'yellow';
type Player6 = { nickname: Nickname6; healthBar: Health6; team: Team6 };
const nico6: Player6 = {
  nickname: 'nico',
  healthBar: 10,
  team: 'blue',
};

type Food6 = string;
const kimchi6: Food6 = 'delicious';

// Inteface
// 인터페이스는 오직 오브젝트를 설명하기 위한 용도로 사용
interface IUsers {
  name: String;
}
// 타입은 &(and) 연산을 해야함
interface IPlayers extends IUsers {}
type TPlayer = IUsers & {};
const nico66: IPlayers = { name: 'nico' };
console.log(nico66);
// 인터페이스는 중복 시 새로운 프로퍼티가 추가되지만, 타입은 에러
// 인터페이스는 OOP를 기준으로 만들어 졌고, 타입은 보다 유연함

/* 
인터페이스는 가벼우며 컴파일 시 사라짐
인터페이스는 클래스나 오브젝트의 형태를 미리 설명
abstract class User {
  constructor(protected firstName: string, protected lastName: string) { }
  abstract sayHi(name: string): string;
  abstract fullName():string;
}

class Player extends User {
  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string){
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
*/
interface IUser {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
// 인터페이스를 구현하는 implements
// 추상클래스를 상속해서 구현하는 것과 같으며 더욱 가벼움
// 인터페이스를 구현할 때는 프로퍼티의 접근제어자를 private/protected로 할 수 없음
class PlayerClass implements IUser {
  constructor(public firstName: string, public lastName: string) {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// 인터페이스는 다중 구현이 가능
// class Player implements User, Human {}
