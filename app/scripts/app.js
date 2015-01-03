'use strict';

var ViewSwitcher = require('ampersand-view-switcher');
var Router = require('./router');
var AppState = require('./models/app-state');
var Things = require('./models/thing-collection');
var HeaderView = require('./views/header');
var TabsView = require('./views/tabs');
var RecordListView = require('./views/record-list');
var ReportListView = require('./views/report-list');
var events = require('./events');

var app = {
  init: function (el) {

    this.state = new AppState();
    this.things = new Things();

    this.headerView = new HeaderView({el: el.querySelector('header'), model: this.state});
    this.contentPane = new ViewSwitcher(el.querySelector('main'));
    this.tabsView = new TabsView({el: el.querySelector('footer'), model: this.state});

    this.modalContainer = el.querySelector('[data-hook~=modal]');
    this.modalSwitcher = new ViewSwitcher(this.modalContainer);
    events.on('modal:show', this.showModal, this);
    events.on('modal:hide', this.hideModal, this);

    this.router = new Router();

    this.router.on('route:recordList', this.showRecordList, this);
    this.router.on('route:reportList', this.showReportList, this);

    this.router.history.start();
  },

  showRecordList: function () {
    this.state.activeTab = 'record';
    this.contentPane.set(new RecordListView({collection: this.things}));
  },

  showReportList: function () {
    this.state.activeTab = 'report';
    this.contentPane.set(new ReportListView({collection: this.things}));
  },

  showModal: function (view) {
    this.modalSwitcher.set(view);
    this.modalContainer.classList.add('active');
  },

  hideModal: function () {
    this.modalContainer.classList.remove('active');
  }
};

module.exports = app;
