'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/thing-new.html');
var router = require('router');

module.exports = View.extend({
  autoRender: true,

  template: template,

  render: function () {
    this.renderWithTemplate();

    this.cacheElements({
      nameField: '[data-hook~=name]',
      descriptionField: '[data-hook~=description]'
    });

    return this;
  },

  events: {
    'click [data-hook~=save]': 'saveNewThing'
  },

  saveNewThing: function () {
    console.log('hello!');
    var name = this.nameField.value.trim();
    var description = this.descriptionField.value.trim();

    if (name.length) {
      this.collection.add({name: name, description: description});
      router.navigate('things', {trigger: true});
    }
  }
});
