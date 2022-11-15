import http from 'http';
import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

const app = express();
const router = express.Router();

router.post('/process/login', (req, res) => {
  console.log(req.body.id, req.body.password);

  if (req.session.user) {
    console.log('이미 로그인되어 있습니다.');
    res.redirect('/product.html');
  } else {
    req.session.user = {
      id: Number(req.body.id),
      name: '밍',
      authorized: true,
    };

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>로그인 성공</h1>');
    res.end();
  }
});

const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Custom Middleware');
  next();
};
app.use(middleware);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/static', express.static('static'));
app.use('/', express.static('public'));
app.use(cookieParser());
app.use(
  expressSession({ secret: 'my key', resave: true, saveUninitialized: true })
);

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/user/:name?', (req, res) => {
  console.log('일루 안 들오나?');
  res.send(req.params.name);
});

router.get('/process/showCookie', (req, res) => {
  const cookie = req.cookies;
  res.send(cookie);
});

router.get('/process/setCookie', (req, res) => {
  res.cookie(
    'user',
    { id: 'ming', name: '밍', authorized: true },
    { httpOnly: true }
  );

  res.redirect('/process/showCookie');
});

app.use(router);

app.use((req, res) => {
  // console.log(req.query);
  // console.log(req.header('User-Agent'));
  // console.log(req.body);
});

http.createServer(app).listen(52273, () => {
  console.log('Server Running at http://127.0.0.1:52273');
});
