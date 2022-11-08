import fetch from 'node-fetch';

const request = {
  get(url) {
    return fetch(url);
  },
  post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  },
};

request
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then(console.log);

request
  .post('https://jsonplaceholder.typicode.com/todos', {
    userId: 1,
    title: 'JavaScript',
    completed: false,
  })
  .then((response) => response.json())
  .then(console.log);

// Promise example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'nohack' && password === '123123') {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'nohack') {
          resolve({ name: 'nohack', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

// Class 코드는 동일합니다.
const userStorage = new UserStorage();

try {
  const userId = await userStorage.loginUser('nohack', '123123');
  const userWithRole = await userStorage.getRoles(userId);
  // { name: 'nohack', role: 'admin' }
  console.log(userWithRole);
} catch (error) {
  console.error(error);
}

// userStorage.loginUser(
//   'nohack',
//   '123123',
//   (userId) => {
//     userStorage.getRoles(
//       userId,
//       (userWithRole) => {
//         console.log(userWithRole);
//       },
//       (error) => console.error(error)
//     );
//   },
//   (error) => console.error(error)
// );

// { name: 'nohack', role: 'admin' }
// const userStorage = new UserStorage();
// userStorage
//   .loginUser('nohack', '123123')
//   .then(userStorage.getRoles)
//   .then(console.log)
//   .catch(console.error);

// const checkUser = (userId) =>
//   new Promise((resolve, reject) => {
//     if (userId === 'nohack') {
//       resolve('success');
//     } else {
//       reject('failure');
//     }
//   });

// // success를 출력
// checkUser('nohack')
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
