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
