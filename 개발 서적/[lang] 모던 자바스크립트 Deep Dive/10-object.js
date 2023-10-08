// 객체에 정의된 메서드와 객체에 할당한 함수를 호출할 때 this의 차이
const obj = {
  name: 'Lucid',
  sayHi() {
    console.log(this);
    console.log(this.name);
  },
  sayHiArrow: () => {
    console.log(this);
    console.log(this.name);
  },
};

obj.sayHiAssign = function () {
  console.log(this);
  console.log(this.name);
};

obj.sayHi();
obj.sayHiArrow();
obj.sayHiAssign();
