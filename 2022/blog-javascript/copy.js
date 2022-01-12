// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];

// console.log(arr1 === arr2); // false;

// const obj1 = { name: 'Tom', age: 5 };
// const obj2 = { ...obj1 };

// console.log(obj1 === obj2); // false;

const deepCopy = (obj) => {
  console.log(typeof obj);
};

const user = {
  champ: '이즈리얼',
  level: 1,
  stat: {
    ad: 50,
    ap: 10,
  },
  items: [
    { name: '롱소드', stack: 1 },
    { name: '체력 물약', stack: 3 },
  ],
};

deepCopy([]);
deepCopy({});
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Array);
console.log({} instanceof Object);

// function deepCopy(obj) {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj;
//   }

//   if (obj instanceof Array) {
//     return obj.reduce((newObj, value, index) => {
//       newObj[index] = deepCopy(value);
//       return newObj;
//     }, []);
//   }

//   if (obj instanceof Object) {
//     return Object.keys(obj).reduce((newObj, key) => {
//       newObj[key] = deepCopy(obj[key]);
//       return newObj;
//     }, {});
//   }
// }

// 유사 배열에 이터러블 구현하기
