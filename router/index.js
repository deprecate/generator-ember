'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');
var fleck = require('fleck');

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
  // NamedBase needs a name, which is usually the first param passed in the script
  // https://github.com/yeoman/generator/pull/231
  args.push('ember:router');
  yeoman.generators.NamedBase.apply(this, arguments);

  this.options.model_files = [];
  this.options.model_dir = 'app/scripts/models';

  if (fs.existsSync(this.options.model_dir)) {
    this.model_files = fs.readdirSync(this.options.model_dir);
  }

  this.options.coffee = options.coffee;
  // TODO Find a better way to do this. Passing `coffee` via options from model seems to be a futile effort
  this.options.coffee = options.coffee;
  if (!this.options.coffee && this.expandFiles('app/scripts/**/*.coffee', {}).length > 0) {
    this.options.coffee = true;
  }

  this.options.router_file = this._getJSPath('app/scripts/router');
};

util.inherits(RouterGenerator, yeoman.generators.NamedBase);

RouterGenerator.prototype._getJSPath = function _getJSPath(file) {
  return file + (this.options.coffee ? '.coffee' : '.js');
};

RouterGenerator.prototype.generateFiles = function generateFiles() {
  this.models = [];
  var models = this.model_files;
  for (var i in models) {
    var extension = this._getJSPath('_model');
    var stripped = models[i].replace(extension, '');
    this.models.push({
      single: fleck.singularize(stripped),
      plural: fleck.pluralize(stripped)
    });
  }
  this.copy(this._getJSPath('base'), this.options.router_file);
};
