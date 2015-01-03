'use strict';

var View = require('ampersand-view');
var template = require('../../templates/record-list.html');
var ItemView = require('./thing-record-list-item');

module.exports = View.extend({
  template: template,

  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, ItemView, this.queryByHook('record-things-list'));
    return this;
  }

});
