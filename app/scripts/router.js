'use strict';

var Router = require('ampersand-router');

module.exports = new (Router.extend({

  routes: {
    '': 'home',
    'things/all/record': 'recordList',
    'things/all/report': 'reportList',
    'things/new': 'newThing'
  },

  home: function () {
    this.redirectTo('things/all/record');
  }

}))();
