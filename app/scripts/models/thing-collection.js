'use strict';

var Collection = require('ampersand-collection');
var Thing = require('./thing');

module.exports = Collection.extend({
  model: Thing,

  comparator: 'created',

  initialize: function () {
    this.listenTo(this, 'add', this.storeNewThing);
  },

  storeNewThing: function (thing) {
    console.log(thing);
  }
});
