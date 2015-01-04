'use strict';

var State = require('ampersand-state');
var Happenings = require('./happening-collection');

module.exports = State.extend({
  props: {
    id: 'string',
    name: 'string'
  },

  collections: {
    happenings: Happenings
  }
});
