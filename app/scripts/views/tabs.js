'use strict';

var View = require('ampersand-view');
var template = require('templates/tabs.html');
var router = require('../router');

module.exports = View.extend({
  autoRender: true,

  template: template,

  props: {
    isRecordActive: 'boolean',
    isReportActive: 'boolean'
  },

  initialize: function () {
    ['record', 'report'].forEach(function (tabName) {
      this.listenTo(router, 'route:' + tabName + 'List', function () {
        this.isRecordActive = tabName === 'record';
        this.isReportActive = tabName === 'report';
      });
    }.bind(this));
  },

  bindings: {
    'isRecordActive': {
      type: 'attribute',
      name: 'aria-selected',
      hook: 'tab-record'
    },
    'isReportActive': {
      type: 'attribute',
      name: 'aria-selected',
      hook: 'tab-report'
    }
  }
});
