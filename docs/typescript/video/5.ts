// abstract class
// 공통된 특징을 추상화시킨 클래스 (인스턴스를 만들 수는 없음)
abstract class User5 {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}
  // 메소드도 접근제어 지정 가능
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // 메소드도 추상화 가능하며, Call Signature만 적음
  // 자식 클래스가 반드시 구현해야 함
  abstract getNickname(): void;
}

// private, public
class Player5 extends User5 {
  getNickname(): void {
    console.log(this.nickname);
  }
}
const nico5 = new Player5('nico', 'las', '니꼬');
console.log(nico5.getFullName());

// HashMap
type Words = {
  // string으로 된 프로퍼티를 가지는 Words 타입
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    // manually initialize
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  del(term: string) {
    if (this.words[term]) delete this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const dict = new Dict();
const kimchi = new Word('kimchi', '한국의 음식');
dict.add(kimchi);
dict.del('kimchi');
console.log(dict.def('kimchi'));
