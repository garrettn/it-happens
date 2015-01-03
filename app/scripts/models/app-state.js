'use strict';

var State = require('ampersand-state');

module.exports = State.extend({
  props: {
    activeTab: {
      type: 'string',
      values: ['record', 'report']
    }
  }
});
