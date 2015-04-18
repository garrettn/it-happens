'use strict';

// Copy the files necessary for Firefox OS
require('!file?name=[name].[ext]!../manifest.webapp');
require('!file?name=[name].[ext]!../images/icon128.png');
require('!file?name=[name].[ext]!../images/icon512.png');

// Load the dist version of localforage as a separate file because it's not
// compatible with Webpack yet. The module 'localforage' is aliased to the
// global variable localforage, which is created by this script.
require('file?name=localforage.js!localforage/dist/localforage.nopromises.min.js');

// Import the main stylesheet
require('styles/main.css');

var app = require('./app');

document.addEventListener('DOMContentLoaded', function () {
  app.init(document.querySelector('body'));
});
