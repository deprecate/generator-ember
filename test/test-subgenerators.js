/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

require('../lib/expected_controller_files');
require('../lib/expected_view_files');

describe('subgenerators', function () {

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      done();
    }.bind(this));
  });

  var filesDoNotExist = function(list_of_files){
    for (var i = 0; i < list_of_files.length; i++) {
      assert(!fs.existsSync(list_of_files[i]));
    }
  };

  it('router', function (done) {
    this.router = {};
    this.router = helpers.createGenerator('ember:router', ['../../router']);

    filesDoNotExist([this.router.router_file]);

    this.router.controller_files = ['foo_controller.js'];
    var router = this.router;
    this.router.run({}, function () {
      helpers.assertFiles( [ router.options.router_file ] );
      var content = fs.readFileSync(router.options.router_file);
      assert(content.toString().match(/route.*foo/));
      done();
    });
  });

  it('view', function (done) {
    this.view = {};
    this.view = helpers.createGenerator('ember:view', ['../../view'], 'foo');

    filesDoNotExist(FILES_GENERATED_BY_VIEW_SUBGEN);

    var view = this.view;
    this.view.run({}, function () {
      helpers.assertFiles( FILES_GENERATED_BY_VIEW_SUBGEN );
      var content = fs.readFileSync(FILES_GENERATED_BY_VIEW_SUBGEN[0]); // brittle
      assert(content.toString().match(/FooView/));
      done();
    });
  }); 

  it('controller', function (done) {
    this.controller = {};
    this.controller = helpers.createGenerator('ember:controller', ['../../controller','../../view','../../router'], 'foo');

    filesDoNotExist(FILES_GENERATED_BY_CONTROLLER_SUBGEN);

    var controller = this.controller;
    this.controller.run({}, function () {
      helpers.assertFiles( FILES_GENERATED_BY_CONTROLLER_SUBGEN );
      var content = fs.readFileSync(FILES_GENERATED_BY_CONTROLLER_SUBGEN[0]); // brittle
      assert(content.toString().match(/FooController/));
      done();
    });
  });
});
