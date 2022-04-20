"use strict";
const obj = { prop: '123' };
const myArray = ['s0', 's1', 's2'];
const secondItem = myArray[1];
function draw(circle) { }
draw({ color: 'blue', radius: 1 });
draw({ color: 'red', radius: 1 });
let x1 = {
    contents: 'hello',
};
console.log(x1.contents);
// string은 에러 발생
// const testNS: NonString<string> = 'hi';
// console.log(testNS);
// read-only
const pair = ['hi', 2];
let pair2 = ['hi', 2];
//# sourceMappingURL=05-object.js.map