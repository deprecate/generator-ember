'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
  // NamedBase needs a name, which is usually the first param passed in the script
  // https://github.com/yeoman/generator/pull/231
  args.push('ember:router');
  yeoman.generators.NamedBase.apply(this, arguments);

  this.options.controller_files = [];
  this.options.controller_dir = 'app/scripts/controllers';
  if (fs.existsSync(this.options.controller_dir)) {
    this.controller_files = fs.readdirSync(this.options.controller_dir);
  }
  this.options.router_file = 'app/scripts/router.js';
};

util.inherits(RouterGenerator, yeoman.generators.NamedBase);

RouterGenerator.prototype.files = function files() {
  this.attrs = [];
  var controllers = this.controller_files;
  for (var i in controllers) {
    this.attrs.push(controllers[i].replace('_controller.js', ''));
  }
  this.copy('base.js', this.options.router_file);
};
