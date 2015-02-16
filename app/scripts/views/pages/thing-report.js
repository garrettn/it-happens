'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/thing-report.html');
var CollectionView = require('ampersand-collection-view');
var ItemView = require('../items/entry');

module.exports = View.extend({
  template: template,

  subviews: {
    entries: {
      hook: 'thing-entries-list',
      prepareView: function (el) {
        return new CollectionView({
          el: el,
          collection: this.model.entries,
          view: ItemView,
          reverse: true
        });
      }
    }
  },

  bindings: {
    'model.timesHappened': {
      type: 'text',
      hook: 'entries'
    },
    'model.description': [
      {
        type: 'toggle',
        hook: 'description'
      },
      {
        type: 'text',
        hook: 'description'
      }
    ]
  }

});
