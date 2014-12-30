'use strict';

var Router = require('ampersand-router');

module.exports = Router.extend({

  routes: {
    '': 'home',
    'record': 'recordList',
    'report': 'reportList'
  },

  home: function () {
    this.redirectTo('record');
  }

});
