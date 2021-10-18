/*
 * @Author: SHEN
 * @Date: 2021-10-08 21:18:58
 * @Last Modified by: SHEN
 * @Last Modified time: 2021-10-08 23:42:16
 */
"use strict";
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /(node_modules|dist)/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebPackPlugin({
    //   title: "react",
    //   template: "index.html",
    // }),
  ],
};
