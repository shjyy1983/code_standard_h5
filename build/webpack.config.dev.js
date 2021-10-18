/*
 * @Author: SHEN
 * @Date: 2021-10-08 23:39:04
 * @Last Modified by: SHEN
 * @Last Modified time: 2021-10-09 18:47:58
 */
"use strict";
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  output: {
    filename: "app.js",
    publicPath: "",
  },
  devtool: "source-map",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: "localhost",
    port: "8090",
    open: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "react",
      template: "index.html",
    }),
  ],
});
