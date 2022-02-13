const url = 'https://example.com';
console.log(url.match(/^https?:\/\//g));

const filename = 'index.html';
console.log(/.html?$/.test(filename));

let target = '12345';
console.log(/^\d+$/.test(target));

target = ' Hi!';
console.log(target.match(/\s+/g));

const id = 'abc123';
console.log(/^[a-zA-Z0-9]{4,10}$/.test(id));

const email = 'ungmo@gmail.com';
const regex = new RegExp(
  /^[0-9a-zA-Z]([-_@\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_@\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/
);
console.log(regex.test(email));

const cellphone = '010-1234-5678';
console.log(cellphone.match(/^\d{3}-\d{3,4}-\d{3,4}$/g));
