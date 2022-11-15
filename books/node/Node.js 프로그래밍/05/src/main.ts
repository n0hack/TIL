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
  if (req.url === '/video') {
    // bytes=0-
    const range = req.headers.range;
    if (!range) {
      res.writeHead(400);
      res.write('Requires Range Header');
      res.end();
      return;
    }

    const videoLink = './static/video.mp4';
    const videoSize = fs.statSync(videoLink).size;

    // 비디오 스트리밍 사이즈 (1MB)
    const CHUNK_SIZE = 10 ** 6;
    // 숫자 제외 부분 모두 제거
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;

    const headers = {
      'Content-Range': `bytes ${start}-${end}/${videoSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoLink, { start, end });
    videoStream.pipe(res);
  } else {
    console.log(req.url);
    console.log('클라이언트 요청이 들어왔습니다.');

    const imageLink = './static/avatar.png';

    // fs.readFile(videoLink, (err, data) => {
    //   // MIME Type: 메시지의 형식을 나타내는 표준
    //   // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    //   // res.write('<h1>Hello World</h1>');
    //   // res.writeHead(200, { 'Content-Type': 'image/png;' });
    //   res.writeHead(200, { 'Content-Type': 'video/mpeg;' });
    //   res.write(data);
    //   res.end();
    // });

    fs.readFile('./public/index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write(data);
      res.end();
    });
  }
});
