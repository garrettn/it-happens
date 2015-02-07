'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/thing-report.html');
var CollectionView = require('ampersand-collection-view');
var ItemView = require('../items/happening');

module.exports = View.extend({
  template: template,

  subviews: {
    happenings: {
      hook: 'thing-happenings-list',
      prepareView: function (el) {
        return new CollectionView({
          el: el,
          collection: this.model.happenings,
          view: ItemView,
          reverse: true
        });
      }
    }
  },

  bindings: {
    'model.timesHappened': {
      type: 'text',
      hook: 'happenings'
    }
  }

});
