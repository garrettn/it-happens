'use strict';

var View = require('ampersand-view');
var template = require('../../templates/tabs.html');

module.exports = View.extend({
  autoRender: true,
  template: template,
  bindings: {
    'model.activeTab': {
      type: 'switchClass',
      name: 'active',
      cases: {
        'record': '[data-hook~=tab-record]',
        'report': '[data-hook~=tab-report]'
      }
    }
  }
});
