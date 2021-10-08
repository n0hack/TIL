var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname));

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
};
