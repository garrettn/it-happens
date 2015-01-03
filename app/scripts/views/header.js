'use strict';

var View = require('ampersand-view');
var template = require('../../templates/header.html');

module.exports = View.extend({
  autoRender: true,
  template: template,
  bindings: {
    'model.activeTab': {
      type: 'switch',
      cases: {
        'record': '[data-hook~=title-record]',
        'report': '[data-hook~=title-report]'
      }
    }
  }
});
