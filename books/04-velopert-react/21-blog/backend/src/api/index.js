import Router from 'koa-router';
import auth from './auth/index';
import posts from './posts';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());

export default api;
