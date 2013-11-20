'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');
var fleck = require('fleck');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.pluralized_name = fleck.pluralize(this.name);

  this.options.coffee = options.coffee;
  // TODO Find a better way to do this. Passing `coffee` via options from controller seems to be a futile effort
  this.options.coffee = options.coffee;
  if (!this.options.coffee && this.expandFiles('app/scripts/**/*.coffee', {}).length > 0) {
    this.options.coffee = true;
  }

  this.hookFor('ember:view', {
    args: args,
    // this doesn't seem to be working yet
    options: {
      coffee: this.options.coffee
    }
  });

  this.hookFor('ember:router');
};

// TODO: add option for Array or Object controller

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype._getJSPath = function _getJSPath(file) {
  return file + (this.options.coffee ? '.coffee' : '.js');
};

ControllerGenerator.prototype.files = function files() {
  this.template(this._getJSPath('base'), 'app/scripts/controllers/' + this._.slugify(this.pluralized_name) + this._getJSPath('_controller'));
  this.template(this._getJSPath('base_edit'), 'app/scripts/controllers/' + this._.slugify(this.name) + this._getJSPath('_edit_controller'));
  this.template(this._getJSPath('plural_route'), 'app/scripts/routes/' + this._.slugify(this.pluralized_name) + this._getJSPath('_route'));
  this.template(this._getJSPath('single_route'), 'app/scripts/routes/' + this._.slugify(this.name) + this._getJSPath('_route'));
  this.template(this._getJSPath('single_edit_route'), 'app/scripts/routes/' + this._.slugify(this.name) + this._getJSPath('_edit_route'));
};
