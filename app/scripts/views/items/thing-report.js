'use strict';

var View = require('ampersand-view');
var template = require('templates/items/thing-report.html');

module.exports = View.extend({
  template: template,

  derived: {
    url: {
      deps: ['model.id'],
      fn: function () {
        return '#things/' + this.model.id + '/report';
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
    },
    'model.timesHappened': {
      type: 'text',
      hook: 'happenings'
    }
  }
});
