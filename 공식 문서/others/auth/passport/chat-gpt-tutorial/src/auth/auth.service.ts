import { Request, RequestHandler } from 'express';
import * as bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export type User = {
  username: string;
  password: string;
};

interface AuthRequest extends Request {
  body: User;
}

const users: User[] = [];

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log('Middleware:', username, password);
    const user = users.find((user) => user.username === username);

    if (!user) {
      return done(null, false, { message: '회원을 찾을 수 없습니다.' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        return done(null, user);
      } else {
        return done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
      }
    });
  }),
);

passport.serializeUser((user, done) => {
  console.log('serializer:', user);
  done(null, (user as User).username);
});

passport.deserializeUser((username, done) => {
  const user = users.find((user) => user.username === username);
  done(null, user);
});

export const register: RequestHandler = async (req: AuthRequest, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  res.redirect('/auth/login');
};

export const login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
});

export { passport };
