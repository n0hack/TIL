"use strict";
function greeter(fn) {
    fn('Hello World');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.decription + ' returned ' + fn(6));
}
// 제네릭
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([]));
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
console.log(parsed);
function minimumLength(obj, minimum) {
    if (obj.length >= minimum) {
        return obj;
    }
    else {
        // Type 그 자체를 반환해야 하는데, 도달할 수 없음
        return { length: minimum };
    }
}
const arr = minimumLength([1, 2, 3], 6);
console.log(arr);
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1);
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        const fn = () => {
            this.admin = true;
        };
        fn();
    },
};
user.becomeAdmin();
console.log(user);
// any는 무엇이든 괜찮지만, unknown은 불가능
// a.b(); 할 때 a가 any라면 실행되지만, unknown일 때는 에러
function safeParse(s) {
    return JSON.parse(s);
}
console.log(safeParse('"Hello"'));
//# sourceMappingURL=04-functions.js.map