require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import process from 'process';
import mongoose from 'mongoose';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => console.error(e));

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

// 라우터 적용 전에 BodyParser 미들웨어 적용
app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port 4000');
});
