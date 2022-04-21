"use strict";
// a와 b는 Call Signature라 한다.
const add3 = (a, b) => a + b;
const push = (config) => {
    if (typeof config === 'string')
        console.log(config);
    else
        console.log(config.path);
};
// 인자의 개수가 다른 경우는 옵션으로 취급
const overAddF = (a, b, c) => {
    return a + b;
};
