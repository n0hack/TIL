import Router from './core/router';
import { NewsDetailView, NewsFeedView } from './page';
import Store from './store';

const store = new Store();

const router = new Router();
const newsFeedView = new NewsFeedView('root', store);
const newsDetailView = new NewsDetailView('root', store);

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailView);

router.route();
