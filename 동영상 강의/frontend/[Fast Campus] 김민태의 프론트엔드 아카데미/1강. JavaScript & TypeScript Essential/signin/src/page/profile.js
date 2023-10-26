
import template from './profile.template';

export default class Profile {
  #template = template;
  #data;
  #container;

  constructor(container, data) {
    this.#container = document.querySelector(container);
    this.#data = data;

    this.#initialize();
  }

  #initialize = () => {
    if (!this.#data.store.userProfile) {
      location.href = '/';
    }
  }

  render = () => {
    this.#container.innerHTML = this.#template({
      userProfile: this.#data.store.userProfile,
      posts: this.#data.store.userPosts,
    });
  }
}
