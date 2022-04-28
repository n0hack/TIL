const { resolve } = require('path');

module.exports = {
  entry: './src/index.ts',
  output: { filename: 'index.bundle.js', path: resolve(__dirname, 'dist') },
  target: 'node',
  module: {
    rules: [{ test: /\.ts$/, exclude: /node_modules/, use: 'babel-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development',
  devServer: {
    static: '.',
  },
};
