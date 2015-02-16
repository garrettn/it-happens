'use strict';

var Collection = require('ampersand-collection');
var Entry = require('./entry');

module.exports = Collection.extend({
  model: Entry,

  comparator: 'when'
});
