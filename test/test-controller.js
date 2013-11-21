/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

require('./helpers/expected_controller_files');
require('./helpers/expected_view_files');

describe('Controller', function () {

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
    this.controller = {};
    this.controller = helpers.createGenerator('ember:controller', ['../../controller','../../view','../../router'], 'user');

    filesDoNotExist(JS_FILES_GENERATED_BY_CONTROLLER_SUBGEN);

    var controller = this.controller;
    this.controller.run({}, function () {
      helpers.assertFiles( JS_FILES_GENERATED_BY_CONTROLLER_SUBGEN );
      helpers.assertFile('app/scripts/controllers/users_controller.js', /UsersController/);
      helpers.assertFile('app/scripts/routes/users_route.js', /UsersRoute/);
      done();
    });
  });

  it('with coffee-script', function (done) {
    this.controller = {};
    this.controller = helpers.createGenerator('ember:controller', ['../../controller','../../view','../../router'], 'user');

    filesDoNotExist(COFFEE_FILES_GENERATED_BY_CONTROLLER_SUBGEN);

    var controller = this.controller;
    this.controller.options['coffee'] = true;
    this.controller.run({}, function () {
      helpers.assertFiles( COFFEE_FILES_GENERATED_BY_CONTROLLER_SUBGEN );
      helpers.assertFile('app/scripts/controllers/users_controller.coffee', /UsersController/);
      helpers.assertFile('app/scripts/routes/users_route.coffee', /UsersRoute/);
      done();
    });
  });

});
