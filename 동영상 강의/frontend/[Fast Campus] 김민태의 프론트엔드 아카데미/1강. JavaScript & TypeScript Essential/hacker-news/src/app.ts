import Router from './core/router';
import { NewsDetailView, NewsFeedView } from './page';
import { Store } from './types';

const store: Store = {
  currentPage: 1,
  feeds: [],
};

const router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailView = new NewsDetailView('root');

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailView);

router.route();
