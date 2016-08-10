const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const hotReload = 'webpack-hot-middleware/client';

module.exports = {
  devtool: "inline-source-map",
  entry: [
    hotReload,
    path.join(__dirname, 'src/js/index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("style.css")
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        "style", "css", "sass"),
      // DEV -> loader: ["style", "css", "sass"],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader:'file'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'react-hmre']
      },
    }]
  },
  externals: {
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": "window"
  }
};
