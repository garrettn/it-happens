'use strict';

// Execute the dist version of localforage in the global context because it's
// not compatible with Webpack yet. The module 'localforage' is aliased to the
// global variable localforage, which is created by this script.
require('script!localforage/dist/localforage.nopromises.js');

// Import the main stylesheet
require('styles/main.css');

var app = require('./app');

document.addEventListener('DOMContentLoaded', function () {
  app.init(document.querySelector('body'));
});
