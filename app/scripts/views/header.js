'use strict';

var View = require('ampersand-view');
var template = require('templates/header.html');
var router = require('../router');

module.exports = View.extend({
  autoRender: true,

  template: template,

  props: {
    activeTitle: {
      type: 'string',
      values: ['record', 'report', 'thing']
    },
    thingName: 'string'
  },

  initialize: function () {
    ['record', 'report'].forEach(function (tabName) {
      this.listenTo(router, 'route:' + tabName + 'List', function () {
        this.activeTitle = tabName;
      });
    }.bind(this));

    this.listenTo(router, 'route:reportThing', this.setThingTitle);
  },

  setThingTitle: function (thingId) {
    var thing = this.collection.get(thingId);

    if (thing) {
      this.thingName = thing.name;
      this.activeTitle = 'thing';
    }
  },

  bindings: {
    'activeTitle': {
      type: 'switch',
      cases: {
        'record': '[data-hook~=title-record]',
        'report': '[data-hook~=title-report]',
        'thing': '[data-hook~=title-thing]'
      }
    },
    'thingName': {
      type: 'text',
      hook: 'thing-name'
    }
  }
});
