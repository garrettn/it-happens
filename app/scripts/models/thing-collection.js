'use strict';

var Collection = require('ampersand-collection');
var Thing = require('./thing');

// Have to use global because it doesn't work with webpack currently
// https://github.com/mozilla/localForage/issues/290
require('script!localforage/dist/localforage.js');

module.exports = Collection.extend({
  model: Thing,

  comparator: 'mostRecentlyHappened',

  initialize: function () {
    this.listenTo(this, 'add change', this.storeThing);
    this.listenTo(this, 'remove', this.deleteThing);
    this.listenTo(this, 'change:mostRecentlyHappened', this.sort);
    
    window.localforage.config({
       name: 'these-things-happen',
       storeName: 'things'
    });
  },
  
  fetch: function () {
    var things = [];
    
    window.localforage.iterate(function (value) {
       things.push(value); 
    }).then(function () {
        this.reset(things);
    }.bind(this));
  },

  storeThing: function (thing) {
    window.localforage.setItem(thing.getId(), thing.serialize());
  },
  
  deleteThing: function (thing) {
    window.localforage.removeItem(thing.getId());
  }
});
