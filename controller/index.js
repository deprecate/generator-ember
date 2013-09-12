'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');
var fleck = require('fleck');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.pluralized_name = fleck.pluralize(this.name);
  this.hookFor('ember:view', {
    args: args
  });
  this.hookFor('ember:router');
};

// TODO: add option for Array or Object controller

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  this.template('base.js', 'app/scripts/controllers/' + this._.slugify(this.pluralized_name) + '_controller.js');
  this.template('base_edit.js', 'app/scripts/controllers/' + this._.slugify(this.name) + '_edit_controller.js');
  this.template('plural_route.js', 'app/scripts/routes/' + this._.slugify(this.pluralized_name) + '_route.js');
  this.template('single_route.js', 'app/scripts/routes/' + this._.slugify(this.name) + '_route.js');
  this.template('single_edit_route.js', 'app/scripts/routes/' + this._.slugify(this.name) + '_edit_route.js');
};
