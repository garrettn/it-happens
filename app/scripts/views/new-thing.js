'use strict';

var View = require('ampersand-view');
var template = require('../../templates/new-thing.html');
var router = require('../router');

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
    'click [data-hook~=save]': 'saveNewThing'
  },

  saveNewThing: function () {
    var name = this.nameField.value.trim();

    if (name.length) {
      this.collection.add({name: name});
      router.navigate('things/all/record', {trigger: true});
    }
  }
});
