const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');

module.exports = (env, { mode }) => {
  console.log(env, mode);
  return mode === 'production' ? prodConfig : devConfig;
};
