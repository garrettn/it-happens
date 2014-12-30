'use strict';

var ViewSwitcher = require('ampersand-view-switcher');
var Router = require('./router');
var RecordListView = require('./views/record-list');
var ReportListView = require('./views/report-list');

var app = {
  init: function (el) {

    this.viewSwitcher = new ViewSwitcher(el);

    this.router = new Router();

    this.router.on('route:recordList', this.showRecordList, this);
    this.router.on('route:reportList', this.showReportList, this);

    this.router.history.start();

  },

  showRecordList: function () {
    this.viewSwitcher.set(new RecordListView());
  },

  showReportList: function () {
    this.viewSwitcher.set(new ReportListView());
  }
};

module.exports = app;
