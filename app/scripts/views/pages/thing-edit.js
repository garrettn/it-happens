'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/thing-edit.html');
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

  bindings: {
    'model.name': [
      {
        type: 'text',
        hook: 'name-title'
      },
      {
        type: 'value',
        hook: 'name'
      }
    ],
    'model.description': {
      type: 'value',
      hook: 'description'
    }
  },

  events: {
    'click [data-hook~=save]': 'saveThing'
  },

  saveThing: function () {
    var name = this.nameField.value.trim();
    var description = this.descriptionField.value.trim();

    if (name.length) {
      this.model.set({name: name, description: description});
      router.navigate('things', {trigger: true});
    }
  }
});
