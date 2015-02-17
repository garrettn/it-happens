'use strict';

var View = require('ampersand-view');
var template = require('templates/items/thing.html');

module.exports = View.extend({
  template: template,

  derived: {
    entriesInflection: {
      deps: ['model.timesHappened'],
      fn: function () {
        return this.model.timesHappened === 1 ? 'entry' : 'entries';
      }
    },
    latestFormatted: {
      deps: ['model.mostRecentlyHappened'],
      fn: function () {
        return this.model.mostRecentlyHappened.toLocaleString();
      }
    }
  },

  bindings: {
    'model.name': {
      type: 'text',
      hook: 'name'
    },
    'model.timesHappened': [
      {
        type: 'text',
        hook: 'entries-number'
      },
      {
        type: 'toggle',
        hook: 'latest'
      }
    ],
    'entriesInflection': {
      type: 'text',
      hook: 'entries-inflection'
    },
    'latestFormatted': {
      type: 'text',
      hook: 'latest-when'
    }
  }
});
