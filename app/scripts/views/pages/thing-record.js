'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/thing-record.html');
var Entry = require('../../models/entry');
var router = require('router');

module.exports = View.extend({
  autoRender: true,

  template: template,

  props: {
    entry: 'state'
  },

  derived: {
    formattedWhen: {
      deps: ['entry.when'],
      fn: function () {
        return this.entry.when.toLocaleString();
      }
    }
  },

  initialize: function () {
    this.entry = new Entry();
  },

  render: function () {
    this.renderWithTemplate();

    this.cacheElements({
      notesField: '[data-hook~=notes]'
    });
  },

  bindings: {
    'model.name': {
      type: 'text',
      hook: 'name'
    },
    'model.description': [
      {
        type: 'toggle',
        hook: 'description'
      },
      {
        type: 'text',
        hook: 'description'
      }
    ],
    'formattedWhen': {
      type: 'text',
      hook: 'when'
    }
  },

  events: {
    'click [data-hook~=save]': 'saveEntry'
  },

  saveEntry: function () {
    var notes = this.notesField.value.trim();

    if (notes) {
      this.entry.notes = notes;
    }

    this.model.entry.add(this.entry);

    router.navigate('things/all/record', {trigger: true});
  }
});
