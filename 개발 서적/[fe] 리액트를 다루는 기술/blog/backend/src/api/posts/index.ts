import Router from '@koa/router';
import * as postCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', checkLoggedIn, postCtrl.write);
posts.get('/:id', postCtrl.getPostById, postCtrl.read);
posts.delete('/:id', checkLoggedIn, postCtrl.getPostById, postCtrl.checkOwnPost, postCtrl.remove);
posts.patch('/:id', checkLoggedIn, postCtrl.getPostById, postCtrl.checkOwnPost, postCtrl.update);

export default posts;
