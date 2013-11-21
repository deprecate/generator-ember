/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

describe('Router', function () {

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      done();
    }.bind(this));
  });

  var filesDoNotExist = function(list_of_files){
    for (var i = 0; i < list_of_files.length; i++) {
      assert(!fs.existsSync(list_of_files[i]), list_of_files[i]);
    }
  };

  it('with javascript', function (done) {
    this.router = {};
    this.router = helpers.createGenerator('ember:router', ['../../router']);

    filesDoNotExist([this.router.router_file]);

    this.router.controller_files = ['user_controller.js'];
    var router = this.router;
    this.router.run({}, function () {
      helpers.assertFiles( [ router.options.router_file ] );
      done();
    });
  });

  it('with coffee-script', function (done) {
    this.router = {};
    this.router = helpers.createGenerator('ember:router', ['../../router']);

    filesDoNotExist([this.router.router_file]);

    this.router.controller_files = ['user_controller.coffee'];
    var router = this.router;
    this.router.run({}, function () {
      helpers.assertFiles( [ router.options.router_file ] );
      done();
    });
  });
});
