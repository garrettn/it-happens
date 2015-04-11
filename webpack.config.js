'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: 'main',
  output: {
    path: __dirname + '/dist',
    filename: 'app.[hash].js'
  },
  resolve: {
    root: __dirname + '/app/scripts',
    alias: {
      templates: __dirname + '/app/templates',
      router: __dirname + '/app/scripts/router',
      styles: __dirname + '/app/styles'
    }
  },
  externals: {
    'localforage': 'localforage'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.[hash].css')
  ]
};
