const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "react-hot-loader/patch", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
              plugins: ["react-hot-loader/babel"],
            },
          },
        ],
        exclude: [/node_modules/],
      },
      { test: /.txt$/, use: ["raw-loader"] },
    ],
  },
  plugins: [
    new UglifyJsPlugin({ test: /\.js(\?.*)?$/i, extractComments: true }),
    new HtmlWebpackPlugin({
      title: "Plugin generate page",
      template: "./index.html",
    }),
    new webpack.HotModuleReplacementPlugin({}),
  ],
  // 변경 자동 반영 (watch: true)
  watch: false,
  // 개발 서버용 설정
  devServer: {
    static: path.join(__dirname, "public"),
    hot: true,
  },
  optimization: {
    moduleIds: "named",
  },
};
