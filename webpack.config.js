const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: "cheap-eval-source-map",
  entry: {
    app: [path.join(__dirname, 'src/js/app.jsx')]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
