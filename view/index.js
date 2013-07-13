'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
  this.copy('base.js', 'app/scripts/views/' + this._.slugify(this.name) + '_view.js');
  this.copy('base.hbs', 'app/templates/' + this._.slugify(this.name) + '.hbs');
};
