'use strict';

var Router = require('ampersand-router');

module.exports = new (Router.extend({

  routes: {
    '': 'home',
    'things': 'showThings',
    'things/new': 'newThing'
  },

  home: function () {
    this.redirectTo('things');
  }

}))();
