'use strict';

var View = require('ampersand-view');
var template = require('../../templates/header.html');
var router = require('../router');

module.exports = View.extend({
  autoRender: true,

  template: template,

  props: {
    activeTitle: {
      type: 'string',
      values: ['record', 'report']
    }
  },

  initialize: function () {
    ['record', 'report'].forEach(function (tabName) {
      this.listenTo(router, 'route:' + tabName + 'List', function () {
        this.activeTitle = tabName;
      });
    }.bind(this));
  },

  bindings: {
    'activeTitle': {
      type: 'switch',
      cases: {
        'record': '[data-hook~=title-record]',
        'report': '[data-hook~=title-report]'
      }
    }
  }
});
