'use strict';

var Collection = require('ampersand-collection');
var Thing = require('./thing');

module.exports = Collection.extend({
  model: Thing,

  comparator: 'mostRecentlyHappened',

  initialize: function () {
    this.listenTo(this, 'add', this.storeNewThing);
    this.listenTo(this, 'change:mostRecentlyHappened', this.sort);
  },

  storeNewThing: function (thing) {
    console.log(thing);
  }
});
