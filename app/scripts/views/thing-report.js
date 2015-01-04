'use strict';

var View = require('ampersand-view');
var template = require('../../templates/thing-report.html');
var ItemView = require('./thing-happening-list-item');

module.exports = View.extend({
  template: template,

  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.model.happenings, ItemView, this.queryByHook('thing-happenings-list'));
    return this;
  },

  bindings: {
    'model.timesHappened': {
      type: 'text',
      hook: 'happenings'
    }
  }

});
