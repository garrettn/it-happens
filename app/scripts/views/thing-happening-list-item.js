'use strict';

var View = require('ampersand-view');
var template = require('templates/thing-happening-list-item.html');

module.exports = View.extend({
  template: template,

  derived: {
    formattedWhen: {
      deps: ['model.when'],
      fn: function () {
        return this.model.when.toLocaleString();
      }
    }
  },

  bindings: {
    'formattedWhen': {
      type: 'text',
      hook: 'when'
    },
    'model.notes': {
      type: 'text',
      hook: 'notes'
    }
  }
});
