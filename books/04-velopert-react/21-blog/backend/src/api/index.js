import Router from 'koa-router';
import posts from './posts';

const api = new Router();

api.use('/posts', posts.routes());

export default api;
