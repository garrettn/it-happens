'use strict';

var ViewSwitcher = require('ampersand-view-switcher');
var Router = require('./router');

var app = {
  init: function (el) {

    this.viewSwitcher = new ViewSwitcher(el);

    this.router = new Router();

    this.router.history.start();

  }
};

module.exports = app;
