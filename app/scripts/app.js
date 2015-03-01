'use strict';

var router = require('router');
var Things = require('./models/thing-collection');
var ThingsView = require('./views/pages/things');
var ViewSwitcher = require('ampersand-view-switcher');
var NewThingView = require('./views/pages/thing-new');
var EditThingView = require('./views/pages/thing-edit');
var EntriesView = require('./views/pages/entries');
var NewEntryView = require('./views/pages/entry-new');

var app = {
  init: function () {

    this.things = new Things();
    this.things.fetch();

    this.thingsContainer = document.querySelector('[data-hook~=view-things]');
    this.detailContainer = document.querySelector('[data-hook~=container-detail]');

    this.thingsView = new ThingsView({
      collection: this.things
    });

    this.thingsContainer.appendChild(this.thingsView.render().el);

    this.detailSwitcher = new ViewSwitcher(this.detailContainer);

    router.on('route:showThings', this.showThings, this);
    router.on('route:newThing', this.showNewThing, this);
    router.on('route:editThing', this.showEditThing, this);
    router.on('route:showEntries', this.showEntries, this);
    router.on('route:newEntry', this.showNewEntry, this);

    router.history.start();
  },

  showDetail: function (view) {
    this.detailSwitcher.set(view);
    this.thingsContainer.classList.remove('active');
    this.detailContainer.classList.add('active');
  },

  showThings: function () {
    this.detailContainer.classList.remove('active');
    this.thingsContainer.classList.add('active');
  },

  showNewThing: function () {
    this.showDetail(new NewThingView({collection: this.things}));
  },

  showEditThing: function (thingId) {
    var thing = this.things.get(thingId);

    if (thing) {
      this.showDetail(new EditThingView({model: thing}));
    } else {
      router.redirectTo('things');
    }
  },

  showEntries: function (thingId) {
    var thing = this.things.get(thingId);

    if (thing) {
      this.showDetail(new EntriesView({model: thing}));
    } else {
      router.redirectTo('things');
    }
  },

  showNewEntry: function (thingId) {
    var thing = this.things.get(thingId);

    if (thing) {
      this.showDetail(new NewEntryView({model: thing}));
    } else {
      router.redirectTo('things');
    }
  }

};

module.exports = app;
