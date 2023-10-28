
import template from './page-not-found.template';

export default class PageNotFound {
  #template = template;
  #container;

  constructor(container) {
    this.#container = document.querySelector(container);
  }

  render = () => {
    this.#container.innerHTML = this.#template();
  }
}
