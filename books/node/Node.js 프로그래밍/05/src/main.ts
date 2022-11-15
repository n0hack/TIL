import http from 'http';
import fs from 'fs';

const server = http.createServer();

const port = 4000;
server.listen(port, '127.0.0.1', () => {
  console.log(`Server listening on port ${port}`);
});

server.on('connection', (socket) => {
  console.log(socket.address());
});

server.on('request', (req, res) => {
  console.log(req.url);
  console.log('클라이언트 요청이 들어왔습니다.');

  const imageLink = './static/avatar.png';
  const videoLink = './static/video.mp4';

  fs.readFile(videoLink, (err, data) => {
    // MIME Type: 메시지의 형식을 나타내는 표준
    // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // res.write('<h1>Hello World</h1>');
    // res.writeHead(200, { 'Content-Type': 'image/png;' });
    res.writeHead(200, { 'Content-Type': 'video/mpeg;' });
    res.write(data);
    res.end();
  });
});
