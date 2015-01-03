'use strict';

var View = require('ampersand-view');
var template = require('../../templates/thing-record-list-item.html');

module.exports = View.extend({
  template: template,
  bindings: {
    'model.name': {
      type: 'text',
      hook: 'name'
    }
  }
});
