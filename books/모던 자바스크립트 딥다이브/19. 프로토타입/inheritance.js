function SubArray(test) {
  this.hi = test;
}
// Object.create (인자를 기반으로 만든 객체)
SubArray.prototype = Object.create(Array.prototype);
// SubArray.prototype.constructor = SubArray;
const sub = new SubArray('hi');
sub.push(45);
console.log(sub);
