'use strict';

var router = require('router');
var Things = require('./models/thing-collection');
var ThingsView = require('./views/pages/things');
var ViewSwitcher = require('ampersand-view-switcher');
var NewThingView = require('./views/pages/thing-new');

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

    router.history.start();
  },

  showDetail: function (view) {
    this.detailSwitcher.set(view);
    this.thingsContainer.classList.add('left');
    this.detailContainer.classList.remove('right');
  },

  showThings: function () {
    this.detailContainer.classList.add('right');
    this.thingsContainer.classList.remove('left');
  },

  showNewThing: function () {
    this.showDetail(new NewThingView({collection: this.things}));
  }

};

module.exports = app;
