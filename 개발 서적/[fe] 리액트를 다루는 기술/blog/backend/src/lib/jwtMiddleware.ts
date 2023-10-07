import { Middleware } from '@koa/router';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const jwtMiddleware: Middleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      _id: string;
      username: string;
      exp: number;
    };
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    };

    // 토큰의 남은 유효 기간이 3.5일 미만이라면 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id);
      const token = user?.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
      });
    }
    return next();
  } catch (e) {
    // token validate failed
    return next();
  }
};

export default jwtMiddleware;
