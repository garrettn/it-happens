'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/things.html');
var CollectionView = require('ampersand-collection-view');
var ThingView = require('../items/thing.js');

module.exports = View.extend({
  template: template,

  props: {
    hasThings: 'boolean'
  },

  initialize: function () {
    this.listenToAndRun(this.collection, 'add remove reset', this.updateHasThings);
  },

  updateHasThings: function () {
    this.hasThings = this.collection.length > 0;
  },

  subviews: {
    things: {
      hook: 'things',
      prepareView: function (el) {
        return new CollectionView({
          el: el,
          collection: this.collection,
          view: ThingView,
          reverse: true
        });
      }
    }
  },

  bindings: {
    'hasThings' : {
      type: 'toggle',
      yes: '[data-hook~=has-things]',
      no: '[data-hook~=no-things]'
    }
  }

});
