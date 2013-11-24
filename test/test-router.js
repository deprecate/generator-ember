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

  var filesDoNotExist = function (files) {
    for (var i = 0; i < files.length; i++) {
      assert(!fs.existsSync(files[i]), files[i] + ' should not exist');
    }
  };

  it('with javascript', function (done) {
    var router = helpers.createGenerator('ember:router', ['../../router']);

    filesDoNotExist([router.router_file]);

    router.controller_files = ['user_controller.js'];
    router.run({}, function () {
      helpers.assertFiles([router.options.router_file]);
      done();
    });
  });

  it('with coffee-script', function (done) {
    var router = helpers.createGenerator('ember:router', ['../../router']);

    filesDoNotExist([router.router_file]);

    router.controllerFiles = ['user_controller.coffee'];
    router.run({}, function () {
      helpers.assertFiles([router.options.router_file]);
      done();
    });
  });
});
