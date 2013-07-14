'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require("fs")

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
  // NamedBase needs a name, which is usually the first param passed in the script
  // https://github.com/yeoman/generator/pull/231
  args.push('ember:router'); 
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(RouterGenerator, yeoman.generators.NamedBase);

RouterGenerator.prototype.files = function files() {
  this.attrs = [];
  var files = fs.readdirSync('app/scripts/controllers');
  for(var i in files) {
    this.attrs.push( files[i].replace('_controller.js','') );
  }
  this.copy('base.js', 'app/scripts/router.js');
};
