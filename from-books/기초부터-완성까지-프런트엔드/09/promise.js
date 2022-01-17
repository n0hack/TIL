let values = [];

const doA = () => new Promise((resolve) => setTimeout(() => resolve(1), 500));
const doB = () => new Promise((resolve) => setTimeout(() => resolve(2), 500));
const doC = () =>
  new Promise((resolve, reject) => setTimeout(() => reject(3), 500));

const sum = (values) =>
  new Promise((resolve) =>
    setTimeout(() => {
      const value = values.reduce((total, value) => total + value, 0);
      resolve(value);
    }, 500)
  );

// doA()
//   .then((resultA) => {
//     values.push(resultA);
//     return doB();
//   })
//   .then((resultB) => {
//     values.push(resultB);
//     return doC();
//   })
//   .then((resultC) => {
//     values.push(resultC);
//     return sum();
//   })
// .then(console.log);
Promise.all([doA(), doB(), doC()]).then(sum).then(console.log);
