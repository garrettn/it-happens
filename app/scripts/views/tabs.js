'use strict';

var View = require('ampersand-view');
var template = require('../../templates/tabs.html');
var router = require('../router');

module.exports = View.extend({
  autoRender: true,

  template: template,

  props: {
    activeTab: {
      type: 'string',
      values: ['record', 'report']
    }
  },

  initialize: function () {
    ['record', 'report'].forEach(function (tabName) {
      this.listenTo(router, 'route:' + tabName + 'List', function () {
        this.activeTab = tabName;
      });
    }.bind(this));
  },

  bindings: {
    'activeTab': {
      type: 'switchClass',
      name: 'active',
      cases: {
        'record': '[data-hook~=tab-record]',
        'report': '[data-hook~=tab-report]'
      }
    }
  }
});
