'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');
var getJSPath = require('../utils/js_path');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.dasherized_name = this._.dasherize(this.name);
  this.componetized_name = this._.classify(this.dasherized_name);
  this.slugified_name = this._.slugify(this.componetized_name);
  this.underscorized_name = this._.underscored(this.name);
  
  if (this.dasherized_name.indexOf('-') === 0) {
    this.dasherized_name = this.dasherized_name.slice(1);
  }

  if (!this.componetized_name.match(/.*[A-Z].*[A-Z].*/)) {
    throw 'Component name must be made of two or more words, e.g. x-player, UserProfile, my_big_gravatar';
  
  }

  // TODO Find a better way to do this. Passing `coffee` via options from controller seems to be a futile effort
  this.options.coffee = options.coffee;
  if (!this.options.coffee && this.expandFiles('app/scripts/**/*.coffee', {}).length > 0) {
    this.options.coffee = true;
  }
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype._getJSPath = getJSPath;

ComponentGenerator.prototype.files = function files() {
  this.copy(this._getJSPath('component'), 'app/scripts/components/' + this.underscorized_name + this._getJSPath('_component'));
  this.copy('component.hbs', 'app/templates/components/' + this.dasherized_name + '.hbs');
};
