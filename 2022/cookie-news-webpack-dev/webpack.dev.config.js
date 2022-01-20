// webpack.config.js
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './asset/js/main.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin({ template: 'index.html' })],
  devtool: 'eval-source-map',
  devServer: {
    port: 8000,
    static: {
      directory: path.resolve(__dirname),
    },
  },
};
