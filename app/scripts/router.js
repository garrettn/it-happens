'use strict';

var Router = require('ampersand-router');

module.exports = new (Router.extend({

  routes: {
    '': 'home',
    'things/all/record': 'recordList',
    'things/:id/record': 'recordThing',
    'things/all/report': 'reportList',
    'things/:id/report': 'reportThing',
    'things/:id/edit': 'editThing',
    'things/new': 'newThing'
  },

  home: function () {
    this.redirectTo('things/all/record');
  }

}))();
