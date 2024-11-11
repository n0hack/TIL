const axios = require('axios');

module.exports = apiHost => axios.create({
  baseURL: apiHost,
});
