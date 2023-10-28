import Store from './store';
import Login from './page/login';
import Profile from './page/profile';
import PageNotFound from './page/page-not-found';

const store = new Store();

function router() {
  const path = location.hash;

  switch(path) {
    case '':
    case '#/login':
      const login = new Login('#root', {
        store,
        title: 'JS & TS Essential'
      });
      login.render();
      break;
    case '#/profile':
      const profile = new Profile('#root', { store });
      profile.render();
      break;
    default:
      const pageNotFound = new PageNotFound('#root');
      pageNotFound.render();
      break;
  }
}

window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', router);
