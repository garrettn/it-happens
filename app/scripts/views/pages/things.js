'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/things.html');
var CollectionView = require('ampersand-collection-view');
var ThingView = require('../items/thing.js');

module.exports = View.extend({
  template: template,
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
  }

});
