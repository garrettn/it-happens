'use strict';

var Collection = require('ampersand-collection');
var Thing = require('./thing');
var uuid = require('uuid');

module.exports = Collection.extend({
  model: Thing,

  initialize: function () {
    this.listenTo(this, 'add', this.storeNewThing);
  },

  storeNewThing: function (thing) {
    if (!thing.getId()) {
      thing.id = uuid.v4();
    }
  }
});
