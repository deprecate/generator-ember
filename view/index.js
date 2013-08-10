'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
  var pluralized_name = fleck.pluralize(this.name);
  this.copy('single.js', 'app/scripts/views/' + this._.slugify(this.name) + '_view.js');
  this.copy('plural.js', 'app/scripts/views/' + this._.slugify(pluralized_name) + '_view.js');
  this.copy('single.hbs', 'app/templates/' + this._.slugify(this.name) + '.hbs');
  this.copy('plural.hbs', 'app/templates/' + this._.slugify(pluralized_name) + '.hbs');
};
