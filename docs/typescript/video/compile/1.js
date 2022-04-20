"use strict";
// 되도록이면 타입스크립트가 알아서 추론하도록 하면 편함
// 최소한으로만 타입을 명시하자
const nico = {
    name: 'nico',
};
const lynn = {
    name: 'lynn',
    age: 12,
};
function playerMaker(name, age) {
    if (age !== undefined) {
        return { name, age };
    }
    else {
        return { name };
    }
}
const playerMakerArrowF = (name) => ({ name });
const nohack = playerMaker('nohack');
console.log(nohack);
