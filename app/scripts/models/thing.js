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
    name: 'string'
  },

  collections: {
    happenings: Happenings
  }
});
