'use strict';

var Router = require('ampersand-router');

module.exports = new (Router.extend({

  routes: {
    '': 'home',
    'things': 'showThings',
    'things/new': 'newThing',
    'things/:id/edit': 'editThing',
    'things/:id': 'showEntries',
    'things/:id/entry': 'newEntry'
  },

  home: function () {
    this.redirectTo('things');
  }

}))();
