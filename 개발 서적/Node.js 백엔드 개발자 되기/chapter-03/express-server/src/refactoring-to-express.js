const url = require('url');
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Express Server 리팩토링: ${port}번 포트에서 실행 중...`);
});

app.get('/', (_, res) => res.end('HOME'));
app.get('/user', user);
app.get('/feed', feed);
app.use(notFound);

function user(req, res) {
  const userInfo = url.parse(req.url, true).query;

  res.json(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
}

function feed(req, res) {
  res.json(`<ul>
    <li>hello</li>
    <li>world</li>
  </ul>`);
}

function notFound(_, res) {
  res.statusCode = 404;
  res.end('Not Found');
}
