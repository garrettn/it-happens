'use strict';

var ViewSwitcher = require('ampersand-view-switcher');
var Router = require('./router');
var AppState = require('./models/app-state');
var Things = require('./models/thing-collection');
var HeaderView = require('./views/header');
var TabsView = require('./views/tabs');
var RecordListView = require('./views/record-list');
var ReportListView = require('./views/report-list');

var app = {
  init: function (el) {

    this.state = new AppState();
    this.things = new Things();

    this.headerView = new HeaderView({el: el.querySelector('header'), model: this.state});
    this.contentPane = new ViewSwitcher(el.querySelector('main'));
    this.tabsView = new TabsView({el: el.querySelector('footer'), model: this.state});

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
  }
};

module.exports = app;
