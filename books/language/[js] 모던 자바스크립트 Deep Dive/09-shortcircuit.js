// 암묵적 변화가 더 좋을 때도 있음
const a = 10;
console.log(typeof (10 + ""));
console.log(typeof !!a);

// 단축평가란 결과가 확정되었을 때, 나머지 연산을 생략하는 것을 의미
// Dog
console.log("Cat" && "Dog");
