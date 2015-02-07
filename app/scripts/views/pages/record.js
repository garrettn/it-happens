'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/record.html');
var CollectionView = require('ampersand-collection-view');
var ItemView = require('../items/thing-record');

module.exports = View.extend({
  template: template,

  subviews: {
    things: {
      hook: 'record-things-list',
      prepareView: function (el) {
        return new CollectionView({
          el: el,
          collection: this.collection,
          view: ItemView,
          reverse: true
        });
      }
    }
  }

});
