'use strict';

var State = require('ampersand-state');
var uuid = require('uuid');
var Entries = require('./entry-collection');
var last = require('amp-last');

module.exports = State.extend({
  props: {
    id: {
      type: 'string',
      default: uuid.v4
    },
    name: 'string',
    description: 'string',
    created: {
      type: 'date',
      default: function () {
        return new Date();
      }
    }
  },

  session: {
    timesHappened: {
      type: 'number',
      default: 0
    },
    mostRecentlyHappened: {
      type: 'date',
      default: function () {
        return new Date();
      }
    }
  },

  collections: {
    entries: Entries
  },

  initialize: function () {
    if (this.entries.length) {
      this.timesHappened = this.entries.length;
      this.updateMostRecentlyHappened(last(this.entries.models));
    } else {
      this.mostRecentlyHappened = new Date(this.created);
    }

    this.listenTo(this.entries, 'add remove', function () {
      this.timesHappened = this.entries.length;
    });

    this.listenTo(this.entries, 'add', this.updateMostRecentlyHappened);
  },

  updateMostRecentlyHappened: function (entry) {
    this.mostRecentlyHappened = new Date(entry.when);
  }
});
