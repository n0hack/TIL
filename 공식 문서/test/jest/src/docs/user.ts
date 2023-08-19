import axios from 'axios';

class User {
  static all() {
    return axios.get('https://jsonplaceholder.typicode.com/users/1').then((resp) => resp.data);
  }
}

export default User;
