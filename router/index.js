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
  this.options.router_file = 'app/scripts/router.js';
};

util.inherits(RouterGenerator, yeoman.generators.NamedBase);

RouterGenerator.prototype.files = function files() {
  this.models = [];
  var models = this.model_files;
  for (var i in models) {
    var stripped = models[i].replace('_model.js', '');
    this.models.push({
      single: fleck.singularize(stripped),
      plural: fleck.pluralize(stripped)
    });
  }
  this.copy('base.js', this.options.router_file);
};
