import Koa from 'koa';
import Router from '@koa/router';
import api from './api';
import { bodyParser } from '@koa/bodyparser';
import { config } from 'dotenv';
import mongoose from 'mongoose';
// import createFakeData from './createFakeData';
import jwtMiddleware from './lib/jwtMiddleware';

config();

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI!)
  .then(() => {
    console.log('MongoDB connected');
    // createFakeData();
  })
  .catch((e) => console.log(e));

app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log('Server running on port 4000');
});
