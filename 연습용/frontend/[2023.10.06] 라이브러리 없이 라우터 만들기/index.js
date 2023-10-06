import createRouter from './router.js';

const conatiner = document.querySelector('main');
const pages = {
  home: () => (conatiner.innerText = 'home page'),
  melon: () => (conatiner.innerText = 'melon page'),
};

const router = createRouter();

router.addRoute('#/', pages.home).addRoute('#/melon', pages.melon).start();
