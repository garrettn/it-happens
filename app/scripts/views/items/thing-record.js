'use strict';

var View = require('ampersand-view');
var template = require('templates/items/thing-record.html');
var router = require('router');

module.exports = View.extend({
  template: template,

  derived: {
    baseUrl: {
      deps: ['model.id'],
      fn: function () {
        return 'things/' + this.model.id + '/';
      }
    },
    recordUrl: {
      deps: ['baseUrl'],
      fn: function () {
        return '#' + this.baseUrl + 'record';
      }
    },
    editUrl: {
      deps: ['baseUrl'],
      fn: function () {
        return this.baseUrl + 'edit';
      }
    },
    menuId: {
        deps: ['model.cid'],
        fn: function () {
            return 'menu-' + this.model.cid;
        }
    }
  },

  bindings: {
    'model.name': {
      type: 'text',
      hook: 'name'
    },
    'recordUrl': {
      type: 'attribute',
      hook: 'url',
      name: 'href'
    },
    menuId: [
      {
          type: 'attribute',
          hook: 'url',
          name: 'contextmenu'
      },
      {
          type: 'attribute',
          hook: 'menu',
          name: 'id'
      }
    ]
  },

  events: {
      'click [data-hook~=edit]': 'editThing',
      'click [data-hook~=delete]': 'deleteThing'
  },

  editThing: function () {
    router.navigate(this.editUrl, {trigger: true});
  },

  deleteThing: function () {
      if (window.confirm('Are you sure you want to delete "' + this.model.name + '"? You will lose all data about when it has happened.')) {
         this.model.collection.remove(this.model);
      }
  }
});
