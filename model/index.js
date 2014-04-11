'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var getJSPath = require('../utils/js_path');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.hookFor('ember:controller', {
    args: args
  });

  this.options.coffee = options.coffee;
  // XXX default and banner to be implemented
  this.argument('attributes', { type: Array, defaults: [], banner: 'field[:type] field[:type]' });

  // parse back the attributes provided, build an array of attr
  this.attrs = this.attributes.map(function (attr) {
    var parts = attr.split(':');
    return {
      name: parts[0],
      type: parts[1] || 'string'
    };
  });
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype._getJSPath = getJSPath;

ModelGenerator.prototype.files = function files() {
  this.template(this._getJSPath('base'), 'app/scripts/models/' + this._.slugify(this.name) + this._getJSPath('_model'));
};
