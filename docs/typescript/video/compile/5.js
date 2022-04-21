"use strict";
// abstract class
// 공통된 특징을 추상화시킨 클래스 (인스턴스를 만들 수는 없음)
class User5 {
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    // 메소드도 접근제어 지정 가능
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// private, public
class Player5 extends User5 {
    getNickname() {
        console.log(this.nickname);
    }
}
const nico5 = new Player5('nico', 'las', '니꼬');
console.log(nico5.getFullName());
class Dict {
    constructor() {
        // manually initialize
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    del(term) {
        if (this.words[term])
            delete this.words[term];
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const dict = new Dict();
const kimchi = new Word('kimchi', '한국의 음식');
dict.add(kimchi);
dict.del('kimchi');
console.log(dict.def('kimchi'));
