const requestData1 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, 3000)
  );

const requestData2 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(2);
    }, 2000)
  );
const requestData3 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(3);
    }, 1000)
  );

Promise.all([requestData1(), requestData2(), requestData3()]).then(console.log);
