"use strict";
const superPrint = (arr) => {
    arr.forEach((i) => console.log(i));
    return arr[0];
};
const superA = superPrint(['A', 'B']);
const superB = superPrint([1, 2, 3]);
const superC = superPrint([true, false]);
const superD = superPrint([true, false, 1, 's']);
console.log(superA, superB, superC, superD);
const testF = (a, b) => {
    console.log(typeof a);
    console.log(typeof b);
    return a;
};
testF(123, 's');
// Reactful Generic
function superPrint2(a) {
    return a[0];
}
// 타입(<boolean>, ...)을 지워도 알아서 추론함
const superA2 = superPrint2([true, false]);
const superB2 = superPrint2([1, 2, 3, 4]);
const superC2 = superPrint2(['a', 'b', 'c']);
// type NicoPlayer = Player4<{ favFood: string }>;
const nico4 = {
    name: 'nico',
    extraInfo: { favFood: '김치' },
};
const lynn4 = {
    name: 'lynn',
    extraInfo: null,
};
let a4 = [1, 2, 3];
console.log(a4);
function printAllNumbers(arr) { }
