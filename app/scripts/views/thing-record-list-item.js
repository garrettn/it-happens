'use strict';

var View = require('ampersand-view');
var template = require('../../templates/thing-record-list-item.html');

module.exports = View.extend({
  template: template,

  derived: {
    url: {
      deps: ['model.id'],
      fn: function () {
        return '#things/' + this.model.id + '/record';
      }
    }
  },

  bindings: {
    'model.name': {
      type: 'text',
      hook: 'name'
    },
    'url': {
      type: 'attribute',
      hook: 'url',
      name: 'href'
    }
  }
});
