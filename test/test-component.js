/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

require('./helpers/expected_component_files');

describe('Component', function () {

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
    this.view = {};
    this.view = helpers.createGenerator('ember:component', ['../../component'], 'x-player');

    filesDoNotExist(JS_FILES_GENERATED_BY_COMPONENT_SUBGEN);

    var view = this.view;
    this.view.run({}, function () {
      helpers.assertFiles( JS_FILES_GENERATED_BY_COMPONENT_SUBGEN );
      helpers.assertFile('app/scripts/components/x_player_component.js', /XPlayerComponent/);
      helpers.assertFile('app/templates/components/x-player.hbs', /component/);
      done();
    });
  });

  it('with coffee-script', function (done) {
    this.view = {};
    this.view = helpers.createGenerator('ember:component', ['../../component'], 'x-player');

    filesDoNotExist(COFFEE_FILES_GENERATED_BY_COMPONENT_SUBGEN);

    var view = this.view;
    this.view.options['coffee'] = true;
    this.view.run({}, function () {
      helpers.assertFiles( COFFEE_FILES_GENERATED_BY_COMPONENT_SUBGEN );
      helpers.assertFile('app/scripts/components/x_player_component.coffee', /XPlayerComponent/);
      helpers.assertFile('app/templates/components/x-player.hbs', /component/);
      done();
    });
  });
});
