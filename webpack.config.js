'use strict';

module.exports = {
  entry: 'main',
  output: {
    path: __dirname + '/dist/scripts',
    filename: 'app.[hash].js'
  },
  resolve: {
    root: __dirname + '/app/scripts',
    alias: {
      templates: __dirname + '/app/templates',
      router: __dirname + '/app/scripts/router'
    }
  },
  externals: {
    'localforage': 'localforage'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' }
    ]
  }
};
