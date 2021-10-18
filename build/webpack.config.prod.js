/*
 * @Author: SHEN
 * @Date: 2021-10-08 23:39:04
 * @Last Modified by: SHEN
 * @Last Modified time: 2021-10-08 23:46:05
 */
const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: "[name].js",
    libraryTarget: "umd",
    publicPath: "",
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: "react",
      template: "index.html",
    }),
  ],
});
