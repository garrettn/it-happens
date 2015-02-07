'use strict';

var View = require('ampersand-view');
var template = require('templates/report-list.html');
var ItemView = require('./thing-report-list-item');

module.exports = View.extend({
  template: template,

  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, ItemView, this.queryByHook('report-things-list'), {
      reverse: true
    });
    return this;
  }

});
