'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/report.html');
var CollectionView = require('ampersand-collection-view');
var ItemView = require('../items/thing-report');

module.exports = View.extend({
  template: template,

  subviews: {
    things: {
      hook: 'report-things-list',
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
