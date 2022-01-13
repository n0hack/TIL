// function foo() {
//   // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//   console.log(this);
//   // true
//   console.log(this === window);
// }
// foo();

// // const obj = {
// //   name: '제리',
// //   greeting() {
// //     return `제 이름은 ${this.name}입니다.`;
// //   },
// // };
// // // 제 이름은 제리입니다.
// // // console.log(obj.greeting());

// // function Person(name, age, job) {
// //   // this = {}
// //   this.name = name;
// //   this.age = age;
// //   this.job = job;
// //   // return this;
// // }
// // const me = new Person('NoHack', 29, 'Developer');
// // Person { name: 'NoHack', age: 29, job: 'Developer' }
// // console.log(me);

// // const obj = { name: '제리' };
// // const obj2 = { name: '톰' };
// // function greeting(age, address) {
// //   console.log(`제 이름은 ${this.name}입니다.`);
// //   console.log(`나이는 ${age}살이고, ${address}에 살고 있습니다.`);
// // }

// // 제 이름은 톰입니다.
// // 나이는 25살이고, 인천에 살고 있습니다.
// // const bound = greeting.bind(obj2);
// // bound(25, '인천');
// // 제 이름은 톰입니다.
// // 나이는 20살이고, 서울에 살고 있습니다.
// // bound.call(obj, 20, '서울');

// const obj = {
//   name: '제리',
//   foo: function () {
//     console.log(this.name);
//   },
//   bar: () => {
//     console.log(this.name);
//   },
// };
// // obj.foo(); // 제리
// // obj.bar(); // undefined

function Prefixer(prefixer) {
  this.prefixer = prefixer;
}
Prefixer.prototype.add = function (arr) {
  return arr.map((item) => {
    return `${this.prefixer}${item}`;
  });
};

const prefixer = new Prefixer('on');
// [ 'onClick', 'onDrag' ]
console.log(prefixer.add(['Click', 'Drag']));

button.addEventListener('click', function (e) {
  console.log(this); // <button>버튼</button>
  console.log(this === e.currentTarget); // true
});

button.addEventListener('click', (e) => {
  console.log(this); // window
  console.log(this === e.currentTarget); // false
});
