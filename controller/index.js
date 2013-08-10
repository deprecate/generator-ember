'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');
var fleck = require('fleck');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.hookFor('ember:view', {
    args: args
  });
  this.hookFor('ember:router');
};

// TODO: add option for Array or Object controller

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  var pluralized_name = fleck.pluralize(this.name);
  this.copy('base.js', 'app/scripts/controllers/' + this._.slugify(pluralized_name) + '_controller.js');
  this.copy('base_route.js', 'app/scripts/routes/' + this._.slugify(pluralized_name) + '_route.js');
};
