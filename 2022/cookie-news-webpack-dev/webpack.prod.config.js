// webpack.config.js
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './asset/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    environment: {
      arrowFunction: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin({ template: 'index.html' }), new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false }), new CssMinimizerPlugin()],
  },
};
