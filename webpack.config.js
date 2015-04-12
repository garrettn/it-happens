'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 'main',
  output: {
    path: __dirname + '/dist',
    filename: 'app.[hash].js'
  },
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules', 'bower_components'],
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
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },

      // Extracting all images and fonts as files because the Building Blocks
      // stylesheets include a lot of assets that we won't use, so we don't want
      // to embed them as data URIs.
      { test: /\.png$/, loader: 'file' },
      { test: /\.svg$/, loader: 'file' },
      { test: /\.(eot|woff|ttf)$/, loader: 'file' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.[hash].css'),
    new HtmlPlugin({
      title: 'These Things Happen',
      template: 'app/index.html'
    })
  ]
};
