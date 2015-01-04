'use strict';

var State = require('ampersand-state');
var uuid = require('uuid');

module.exports = State.extend({
  props: {
    id: {
      type: 'string',
      default: uuid.v4
    },
    when: {
      type: 'date',
      default: function () {
        return new Date();
      }
    },
    notes: 'string'
  }
});
