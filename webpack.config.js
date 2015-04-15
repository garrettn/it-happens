'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');

var isDev = process.env.BUILD_ENV !== 'production';

// Plugins to be used only for development build
var devPlugins = isDev
  ? [
    // Need to specify source maps for CSS until this fix is released:
    // https://github.com/webpack/webpack/pull/975
    new webpack.SourceMapDevToolPlugin({
      test: /\.css$/
    })
  ]
  : [];

// Plugins to be used only for production build
var prodPlugins = isDev
  ? []
  : [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ];

var config = {
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
    preLoaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader'
        }
    ],
    loaders: [
      { test: /\.html$/, loader: 'html' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader' + (isDev ? '?sourceMap' : '')
        )
      },

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
  ].concat(devPlugins, prodPlugins),

  devtool: isDev ? 'source-map' : false,

  jshint: {
    failOnHint: true
  }
};

module.exports = config;
