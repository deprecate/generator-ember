'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require("fs")

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
  this.attrs = [];
  var files = fs.readdirSync('app/scripts/controllers');
  for(var i in files) {
    this.attrs.push( files[i].replace('_controller.js','') );
  }
  this.copy('base.js', 'app/scripts/router.js');
};
