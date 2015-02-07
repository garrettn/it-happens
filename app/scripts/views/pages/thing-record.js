'use strict';

var View = require('ampersand-view');
var template = require('templates/pages/thing-record.html');
var Happening = require('../../models/happening');
var router = require('router');

module.exports = View.extend({
  autoRender: true,

  template: template,

  props: {
    happening: 'state'
  },

  derived: {
    formattedWhen: {
      deps: ['happening.when'],
      fn: function () {
        return this.happening.when.toLocaleString();
      }
    }
  },

  initialize: function () {
    this.happening = new Happening();
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
    'click [data-hook~=save]': 'saveHappening'
  },

  saveHappening: function () {
    var notes = this.notesField.value.trim();

    if (notes) {
      this.happening.notes = notes;
    }

    this.model.happenings.add(this.happening);

    router.navigate('things/all/record', {trigger: true});
  }
});
