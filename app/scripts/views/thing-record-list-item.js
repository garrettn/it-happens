'use strict';

var View = require('ampersand-view');
var template = require('../../templates/thing-record-list-item.html');

module.exports = View.extend({
  template: template,

  derived: {
    url: {
      deps: ['model.id'],
      fn: function () {
        return '#things/' + this.model.id + '/record';
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
    'url': {
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
      'click [data-hook~=delete]': 'deleteThing'
  },
  
  deleteThing: function () {
      if (window.confirm('Are you sure you want to delete "' + this.model.name + '"? You will lose all data about when it has happened.')) {
         this.model.collection.remove(this.model); 
      }
  }
});
