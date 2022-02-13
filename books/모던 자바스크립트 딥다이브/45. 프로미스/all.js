const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) resolve(JSON.parse(xhr.response));
      else reject(new Error(xhr.status));
    };
  });
};

const githubIds = ['jeresig', 'ahejlsberg', 'ungmo2'];

Promise.all(githubIds.map((id) => promiseGet(`https://api.github.com/${id}`)))
  .then((users) => users.map((user) => user.name))
  .then(console.log)
  .catch(console.error);

// const requestData1 = () =>
//   new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(1);
//     }, 3000)
//   );

// const requestData2 = () =>
//   new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(2);
//     }, 2000)
//   );
// const requestData3 = () =>
//   new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(3);
//     }, 1000)
//   );

// Promise.all([requestData1(), requestData2(), requestData3()]).then(console.log);
