const path = require('path');

module.exports = {
  // 클라이언트 사이드 진입점
  entry: './src/browser.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
    ],
  },
};
