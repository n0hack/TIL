// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];

// console.log(arr1 === arr2); // false;

// const obj1 = { name: 'Tom', age: 5 };
// const obj2 = { ...obj1 };

// console.log(obj1 === obj2); // false;

const deepCopy = (param) => {
  if (typeof param !== 'object' || param === null) {
    return param;
  }

  if (param instanceof Array) {
    return param.reduce((newArr, val) => {
      newArr.push(deepCopy(val));
      return newArr;
    }, []);
  } else if (param instanceof Object) {
    return Object.keys(param).reduce((newObj, key) => {
      newObj[key] = deepCopy(param[key]);
      return newObj;
    }, {});
  }
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

console.log(user);
console.log(deepCopy(user));

// 유사 배열에 이터러블 구현하기
