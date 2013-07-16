/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

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

    this.router.options.controller_files = ['foo_controller.js'];
    var router = this.router;
    this.router.run({}, function () {
      helpers.assertFiles( [ router.options.router_file ] );
      var content = fs.readFileSync(router.options.router_file);
      assert(content.toString().match(/route.*foo/));
      done();
    });
  });

  var files_generated_by_view_subgen = [
    'app/scripts/views/foo_view.js',
    'app/templates/foo.hbs'
  ];

  it('view', function (done) {
    this.view = {};
    this.view = helpers.createGenerator('ember:view', ['../../view'], 'foo');

    filesDoNotExist(files_generated_by_view_subgen);

    var view = this.view;
    this.view.run({}, function () {
      helpers.assertFiles( files_generated_by_view_subgen );
      var content = fs.readFileSync(files_generated_by_view_subgen[0]); // brittle
      assert(content.toString().match(/FooView/));
      done();
    });
  }); 

  var files_generated_by_controller_subgen = [
    'app/scripts/controllers/foo_controller.js',
    'app/scripts/routes/foo_route.js'
  ].concat(files_generated_by_view_subgen);

  it('controller', function (done) {
    this.controller = {};
    this.controller = helpers.createGenerator('ember:controller', ['../../controller','../../view','../../router'], 'foo');

    filesDoNotExist(files_generated_by_controller_subgen);

    var controller = this.controller;
    this.controller.run({}, function () {
      helpers.assertFiles( files_generated_by_controller_subgen );
      var content = fs.readFileSync(files_generated_by_controller_subgen[0]); // brittle
      assert(content.toString().match(/FooController/));
      done();
    });
  });

  var files_generated_by_model_subgen = [
    'app/scripts/models/foo_model.js'
  ].concat(files_generated_by_controller_subgen).concat(files_generated_by_view_subgen);

  it('model', function (done) {
    this.model = {};
    this.model = helpers.createGenerator('ember:model', 
       ['../../model','../../controller','../../view','../../router'],
       ['foo', 'name:string']);

    filesDoNotExist(files_generated_by_model_subgen);

    var model = this.model;
    this.model.run({}, function () {
      helpers.assertFiles( files_generated_by_model_subgen );
      var content = fs.readFileSync(files_generated_by_model_subgen[0]); // brittle
      assert(content.toString().match(/Foo = Ember.Object/));
      assert(content.toString().match(/name: DS.attr\('string'\)/));
      done();
    });
  });
});
