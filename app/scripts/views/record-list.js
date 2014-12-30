'use strict';

var View = require('ampersand-view');
var template = require('../../templates/record-list.html');

module.exports = View.extend({
  template: template,

  render: function () {
    this.renderWithTemplate();
  }

});
