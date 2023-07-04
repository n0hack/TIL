// 함수 표현식보다 화살표 함수 사용하기 (this 바인딩 관련)
// 함수 표현식을 사용하면 에러가 발생하므로, 화살표 함수를 사용해 상위 스코프를 기억하자
class Foo {
  method() {
    console.log(this);
    [1, 2].forEach((i) => {
      console.log(this);
    });
  }
}

const f = new Foo();
f.method();
