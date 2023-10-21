import http from 'http';
import path from 'path';
import fs from 'fs';
import axios from 'axios';

namespace Ch04HTTP {
  // const server = http.createServer((req, res) => {
  //   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  //   res.write('<h1>Hello Node!</h1>');
  //   res.end('<p>Hello Server!</p>');
  // });

  // const server = http.createServer(async (req, res) => {
  //   try {
  //     const filePath = path.resolve(__dirname, 'data/server.html');
  //     fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
  //       res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  //       res.end(data);
  //     });
  //   } catch (e: unknown) {
  //     res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
  //     res.end((e as Error).message);
  //   }
  // });

  // const server = http.createServer(async (req, res) => {
  //   console.log(req.url, req.headers.cookie);
  //   res.writeHead(200, { 'set-cookie': 'mycookie=lucid' });
  //   res.end('Hello Node!');
  // });

  // server.listen(8080, () => {
  //   console.log('8080번 포트에서 서버 대기 중입니다!');
  // });

  // 쿠키 관련 실습
  const parseCookies = (cookie = '') => {
    return cookie
      .split(';')
      .map((v) => v.split('='))
      .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
      }, {} as Record<string, string>);
  };

  const server = http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    if (req.url?.startsWith('/login')) {
      const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
      const name = searchParams.get('name');
      const expires = new Date();
      expires.setSeconds(expires.getSeconds() + 10);
      res.writeHead(302, {
        Location: '/',
        'Set-Cookie': `name=${encodeURIComponent(name!)}; Expires=${expires.toUTCString()}; HttpOnly; Path=/`,
      });
      res.end();
    } else if (cookies.name) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`${cookies.name}님 안녕하세요`);
    } else {
      fs.readFile(path.resolve(__dirname, 'data/cookie2.html'), (err, data) => {
        try {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data);
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end((err as Error).message);
        }
      });
    }
  });

  server.listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });
}
