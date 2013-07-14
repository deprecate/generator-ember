'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
  this.copy('base.js', 'app/scripts/router.js');
};
