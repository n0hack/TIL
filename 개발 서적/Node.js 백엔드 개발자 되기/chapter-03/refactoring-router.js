const http = require('http');
const url = require('url');

http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader('Content-Type', 'text/html');

    if (path in urlMap) {
      urlMap[path](req, res);
    } else {
      notFound(req, res);
    }
  })
  .listen(3000, () => console.log('OK 서버 시작!'));

const user = (req, res) => {
  const userInfo = url.parse(req.url, true).query;

  res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
};

const feed = (req, res) => {
  res.end(`<ul>
    <li>hello</li>
    <li>world</li>
  </ul>`);
};

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end('Not Found');
};

const urlMap = {
  '/': (req, res) => res.end('HOME'),
  '/user': user,
  '/feed': feed,
};
