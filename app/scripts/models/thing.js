'use strict';

var State = require('ampersand-state');
var uuid = require('uuid');
var Happenings = require('./happening-collection');
var last = require('amp-last');

module.exports = State.extend({
  props: {
    id: {
      type: 'string',
      default: uuid.v4
    },
    name: 'string',
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
    happenings: Happenings
  },

  initialize: function () {
    if (this.happenings.length) {
      this.updateMostRecentlyHappened(last(this.happenings.models));
    }

    this.listenTo(this.happenings, 'add remove', function () {
      this.timesHappened = this.happenings.length;
    });

    this.listenTo(this.happenings, 'add', this.updateMostRecentlyHappened);
  },

  updateMostRecentlyHappened: function (happening) {
    this.mostRecentlyHappened = new Date(happening.when);
  }
});
