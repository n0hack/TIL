import Koa from 'koa';
import Router from '@koa/router';
import api from './api';
import { bodyParser } from '@koa/bodyparser';

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
