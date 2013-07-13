'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

// TODO: add option for Array or Object controller

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  this.copy('base.js', 'app/scripts/controllers/' + this._.slugify(this.name) + '_controller.js');
  this.copy('base_route.js', 'app/scripts/routes/' + this._.slugify(this.name) + '_route.js');
};
