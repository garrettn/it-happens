'use strict';

var ViewSwitcher = require('ampersand-view-switcher');
var router = require('./router');
var Things = require('./models/thing-collection');
var HeaderView = require('./views/header');
var TabsView = require('./views/tabs');
var RecordListView = require('./views/record-list');
var ThingRecordView = require('./views/thing-record');
var ReportListView = require('./views/report-list');
var ThingReportView = require('./views/thing-report');
var NewThingView = require('./views/new-thing');
var events = require('./events');

var app = {
  init: function (el) {

    this.things = new Things();

    this.headerView = new HeaderView({el: el.querySelector('header'), collection: this.things});
    this.contentPane = new ViewSwitcher(el.querySelector('main'));
    this.tabsView = new TabsView({el: el.querySelector('footer')});

    this.modalContainer = el.querySelector('[data-hook~=modal]');
    this.modalSwitcher = new ViewSwitcher(this.modalContainer);
    events.on('modal:show', this.showModal, this);
    events.on('modal:hide', this.hideModal, this);

    router.on('route:recordList route:reportList', this.hideModal, this);
    router.on('route:recordList', this.showRecordList, this);
    router.on('route:recordThing', this.showRecordThing, this);
    router.on('route:reportList', this.showReportList, this);
    router.on('route:reportThing', this.showReportThing, this);
    router.on('route:newThing', this.showNewThingModal, this);

    router.history.start();
  },

  showRecordList: function () {
    this.contentPane.set(new RecordListView({collection: this.things}));
  },

  showRecordThing: function (thingId) {
    var thing = this.things.get(thingId);

    if (thing) {
      this.showModal(new ThingRecordView({model: thing}));
    } else {
      router.redirectTo('things/all/record');
    }
  },

  showReportThing: function (thingId) {
    var thing = this.things.get(thingId);

    if (thing) {
      this.contentPane.set(new ThingReportView({model: thing}));
    } else {
      router.redirectTo('things/all/report');
    }
  },

  showReportList: function () {
    this.contentPane.set(new ReportListView({collection: this.things}));
  },

  showModal: function (view) {
    this.modalSwitcher.set(view);
    this.modalContainer.classList.add('active');
  },

  hideModal: function () {
    this.modalContainer.classList.remove('active');
  },

  showNewThingModal: function () {
    this.showModal(new NewThingView({collection: this.things}));
  }
};

module.exports = app;
