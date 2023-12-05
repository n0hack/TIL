import template from './login.template';
import TextField from '../views/text-field';
import axios from 'axios';

export default class Login {
  #template = template;
  #data;
  #container;
  #loginFail = false;
  #fields = [];

  constructor(container, data) {
    this.#container = document.querySelector(container);
    this.#data = data;

    this.#initialize();
  }

  #initialize = () => {
    const idField = new TextField('#login-fields', {
      id: 'userid',
      label: '아이디',
      type: 'text',
      placeholder: '아이디를 입력해주세요',
      require: true,
    });
    const passwordField = new TextField('#login-fields', {
      id: 'password',
      label: '비밀번호',
      type: 'password',
      placeholder: '**********',
      require: true,
    });

    this.#fields.push(idField);
    this.#fields.push(passwordField);
  };

  #onSubmit = (e) => {
    e.preventDefault();

    const loginData = this.#fields
      .map((field) => ({ [field.name]: field.value }))
      .reduce((a, b) => ({ ...a, ...b }), {});

    axios
      .post('/api/authentication', loginData)
      .then((result) => {
        return result.data.result;
      })
      .then(({ id, token }) => {
        const options = { headers: { token } };
        this.#data.store.token = token;

        return axios.all([axios.get(`/api/user/${id}`, options), axios.get(`/api/user/${id}/posts`, options)]);
      })
      .then(([profile, posts]) => {
        this.#data.store.userProfile = profile.data.result;
        this.#data.store.userPosts = posts.data.results;

        location.href = '/#/profile';
      })
      .catch((error) => {
        this.#loginFail = true;
        this.render();
      });
  };

  render = () => {
    this.#container.innerHTML = this.#template({ ...this.#data, loginFail: this.#loginFail });
    this.#fields.forEach((field) => {
      field.render(true);
    });

    this.#container.addEventListener('submit', this.#onSubmit);
  };
}
