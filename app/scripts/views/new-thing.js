'use strict';

var View = require('ampersand-view');
var template = require('../../templates/new-thing.html');
var events = require('../events');

module.exports = View.extend({
  autoRender: true,

  template: template,

  render: function () {
    this.renderWithTemplate();

    this.cacheElements({
      nameField: '[data-hook~=name]'
    });

    return this;
  },

  events: {
    'click [data-hook~=close]': 'close',
    'click [data-hook~=save]': 'saveNewThing'
  },

  close: function () {
    events.trigger('modal:hide');
  },

  saveNewThing: function () {
    var name = this.nameField.value.trim();

    if (name.length) {
      this.collection.add({name: name});
      this.close();
    }
  }
});
