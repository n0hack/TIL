import express from 'express';
import { authRouter } from './auth/auth.controller';
import { User, passport } from './auth/auth.service';
import session from 'express-session';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`${(req.user as User).username} 로그인 완료!`);
  } else {
    res.redirect('/auth/login');
  }
});

app.get('/logout', (req, res) => {
  req.logout({}, () => {});
  res.redirect('/auth/login');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}에서 서버 실행 중...`);
});
