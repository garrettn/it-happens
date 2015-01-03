'use strict';

var View = require('ampersand-view');
var template = require('../../templates/record-list.html');
var ItemView = require('./thing-record-list-item');
var NewThingView = require('./new-thing');
var events = require('../events');

module.exports = View.extend({
  template: template,

  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, ItemView, this.queryByHook('record-things-list'));
    return this;
  },


  events: {
    'click [data-hook~=new-thing]': 'showNewThingForm'
  },

  showNewThingForm: function () {
    events.trigger('modal:show', new NewThingView({collection: this.collection}));
  }

});
