'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');
var getJSPath = require('../utils/js_path');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.pluralized_name = fleck.pluralize(this.name);
  this.slugified_name = this._.slugify(this.name);

  // TODO Find a better way to do this. Passing `coffee` via options from controller seems to be a futile effort
  this.options.coffee = options.coffee;
  if (!this.options.coffee && this.expandFiles('app/scripts/**/*.coffee', {}).length > 0) {
    this.options.coffee = true;
  }
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype._getJSPath = getJSPath;

ViewGenerator.prototype.files = function files() {
  this.copy(this._getJSPath('single'), 'app/scripts/views/' + this.slugified_name + this._getJSPath('_view'));
  this.copy(this._getJSPath('single_edit'), 'app/scripts/views/' + this.slugified_name + this._getJSPath('_edit_view'));
  this.copy(this._getJSPath('plural'), 'app/scripts/views/' + this._.slugify(this.pluralized_name) + this._getJSPath('_view'));
  this.copy('single.hbs', 'app/templates/' + this.slugified_name + '.hbs');
  this.copy('single_edit.hbs', 'app/templates/' + this.slugified_name + '/edit.hbs');
  this.copy('plural.hbs', 'app/templates/' + this._.slugify(this.pluralized_name) + '.hbs');
};
