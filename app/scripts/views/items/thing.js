'use strict';

var View = require('ampersand-view');
var template = require('templates/items/thing.html');
var router = require('../../router');
var matches = require('matches-selector');

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
    },
    baseUrl: {
      deps: ['model.id'],
      fn: function () {
        return '#things/' + this.model.getId();
      }
    },
    entryUrl: {
      deps: ['baseUrl'],
      fn: function () {
        return this.baseUrl + '/entry';
      }
    },
    menuId: {
      deps: ['model.cid'],
      fn: function () {
        return 'menu-' + this.model.cid;
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
    },
    'entryUrl': {
      type: 'attribute',
      name: 'href',
      hook: 'new-entry'
    },
    'menuId': [
      {
        type: 'attribute',
        hook: 'thing',
        name: 'contextmenu'
      },
      {
        type: 'attribute',
        hook: 'menu',
        name: 'id'
      },
    ]
  },

  events: {
    'click': 'showEntries',
    'click [data-hook~=delete]': 'deleteThing'
  },

  showEntries: function (e) {
    // Make sure the user didn't tap on the new entry button
    if (!matches(e.target, '[data-hook~=new-entry]')) {
      router.navigate(this.baseUrl, {trigger: true});
    }
  },

  deleteThing: function () {
    if (window.confirm('Are you sure you want to delete "' + this.model.name + '"? You will lose any data associated with it.')) {
      this.model.collection.remove(this.model);
    }
    router.navigate('things', {trigger: true});
  }
});
