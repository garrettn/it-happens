'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/entries.html');
var CollectionView = require('ampersand-collection-view');
var ItemView = require('../items/entry');

module.exports = View.extend({
  template: template,

  derived: {
    entriesInflection: {
      deps: ['model.timesHappened'],
      fn: function () {
        return this.model.timesHappened === 1 ? 'time' : 'times';
      }
    }
  },

  subviews: {
    entries: {
      hook: 'entries',
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
    'model.name': {
      type: 'text',
      hook: 'name'
    },
    'model.timesHappened': {
      type: 'text',
      hook: 'entries-number'
    },
    'entriesInflection': {
      type: 'text',
      hook: 'entries-inflection'
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
