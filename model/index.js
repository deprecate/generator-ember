'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.hookFor('ember:controller', {
    args: args
  });

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

ModelGenerator.prototype.files = function files() {
  this.copy('base.js', 'app/scripts/models/' + this._.slugify(this.name) + '_model.js');
  this.copy('fixtures.js', 'app/scripts/models/' + this._.slugify(this.name) + '_fixtures.js');
};
