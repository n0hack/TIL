const target1 = 'A AA B BB Aa Bb AAA';
const regExp1_1 = /A+|B+/g;
const regExp1_2 = /[AB]+/g;
// console.log(target1.match(regExp1_1));
// console.log(target1.match(regExp1_2));

// 특수문자 제거
const target2 = 'abc#123#';
const regExp2 = /[^A-Za-z0-9]/g;
// console.log(target2.replace(regExp2, ''));
