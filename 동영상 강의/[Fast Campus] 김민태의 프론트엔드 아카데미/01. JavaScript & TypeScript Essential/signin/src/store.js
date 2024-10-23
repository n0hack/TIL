export default class Store {
  #token;
  #userProfile;
  #userPosts;

  constructor() {
    this.#token = '';
    this.#userProfile = null;
  }

  set userProfile(profile) {
    this.#userProfile = profile;
  }

  get userProfile() {
    return this.#userProfile;
  }

  set userPosts(posts) {
    this.#userPosts = posts;
  }

  get userPosts() {
    return this.#userPosts;
  }

  set token(token) {
    this.#token = token;
  }

  get token() {
    return this.#token;
  }
}
