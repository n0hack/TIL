import Router from '@koa/router';
import * as postCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', postCtrl.write);
posts.get('/:id', postCtrl.checkObjectId, postCtrl.read);
posts.delete('/:id', postCtrl.checkObjectId, postCtrl.remove);
posts.patch('/:id', postCtrl.checkObjectId, postCtrl.update);

export default posts;
