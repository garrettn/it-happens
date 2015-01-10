'use strict';

var State = require('ampersand-state');
var uuid = require('uuid');
var Happenings = require('./happening-collection');

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
    }
  },

  collections: {
    happenings: Happenings
  },

  initialize: function () {
    this.listenTo(this.happenings, 'add remove', function () {
      this.timesHappened = this.happenings.length;
    });
  }
});
