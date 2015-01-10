'use strict';

var Collection = require('ampersand-collection');
var Happening = require('./happening');

module.exports = Collection.extend({
  model: Happening,

  comparator: 'when'
});
