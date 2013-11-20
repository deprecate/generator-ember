/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

require('fleck');

require('../lib/expected_model_files');

describe('Model', function () {

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

  //it('takes singular noun and creates singular route, controller, template for edit')
  //it('takes singular noun and registers singular and plural routes with router')
  //it('takes singular noun and creates plural route, template for read of all')
  //it('takes singular noun and creates singular controller, template for read')
  it('with javascript', function (done) {
    this.model = {};
    var cmd_line_args = ['User', 'name:string', 'zipcode:number'];
    this.model = helpers.createGenerator('ember:model',
       ['../../model','../../controller','../../view','../../router'],
       cmd_line_args);

    filesDoNotExist(JS_FILES_GENERATED_BY_MODEL_SUBGEN);

    var model = this.model;
    this.model.run({}, function () {
      helpers.assertFiles( JS_FILES_GENERATED_BY_MODEL_SUBGEN );
      helpers.assertFile('app/scripts/models/user_model.js', /User = DS.Model/);
      helpers.assertFile('app/scripts/models/user_model.js', /name: DS.attr\('string'\)/);
      helpers.assertFile('app/scripts/models/user_model.js', /zipcode: DS.attr\('number'\)/);
      helpers.assertFile('app/scripts/models/user_model.js', /User.FIXTURES/);
    });

    // there has to be a better way
    // to structure/include the following...
    this.router = {};
    this.router = helpers.createGenerator('ember:router', ['../../router']);

    filesDoNotExist([this.router.router_file]);

    var router = this.router;
    this.router.run({}, function () {
      helpers.assertFiles( [ router.options.router_file ] );
      helpers.assertFile(router.options.router_file, /resource\('users'/);
      helpers.assertFile(router.options.router_file, /resource\('user'/);
      done();
    });
  });

  it('with coffeescript', function (done) {
    this.model = {};
    var cmd_line_args = ['User', 'name:string', 'zipcode:number'];
    this.model = helpers.createGenerator('ember:model',
       ['../../model','../../controller','../../view','../../router'],
       cmd_line_args);

    filesDoNotExist(COFFEE_FILES_GENERATED_BY_MODEL_SUBGEN);

    var model = this.model;
    this.model.options['coffee'] = true;
    this.model.run({}, function () {
      helpers.assertFiles( COFFEE_FILES_GENERATED_BY_MODEL_SUBGEN );
      helpers.assertFile('app/scripts/models/user_model.coffee', /User = DS.Model/);
      helpers.assertFile('app/scripts/models/user_model.coffee', /name: DS.attr\('string'\)/);
      helpers.assertFile('app/scripts/models/user_model.coffee', /zipcode: DS.attr\('number'\)/);
      helpers.assertFile('app/scripts/models/user_model.coffee', /User.FIXTURES/);
    });

    // there has to be a better way
    // to structure/include the following...
    this.router = {};
    this.router = helpers.createGenerator('ember:router', ['../../router']);


    filesDoNotExist([this.router.router_file]);

    var router = this.router;
    this.router.run({}, function () {
      helpers.assertFiles( [ router.options.router_file ] );
      helpers.assertFile(router.options.router_file, /resource\('users'/);
      helpers.assertFile(router.options.router_file, /resource\('user'/);
      done();
    });
  });

  it('takes singular noun and creates singular route, controller for new')

  //it('takes singular noun and creates singular route for delete')
});
