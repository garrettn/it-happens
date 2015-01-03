'use strict';

var Collection = require('ampersand-collection');
var Thing = require('./thing');

module.exports = Collection.extend({
  model: Thing
});
