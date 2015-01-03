'use strict';

var app = require('./app');

document.addEventListener('DOMContentLoaded', function () {
  app.init(document.querySelector('body'));
});
