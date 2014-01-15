/*global describe:true, beforeEach:true, it:true, afterEach:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

var EXPECTED_FILES = [
  '.gitignore',
  '.gitattributes',
  '.bowerrc',
  'bower.json',
  'package.json',
  '.jshintrc',
  '.editorconfig',
  'Gruntfile.js',
  'app/scripts/app.js',
  'app/scripts/store.js',
  'app/scripts/routes/application_route.js',
  'app/templates/application.hbs',
  'app/templates/index.hbs',
  'app/index.html'
];

describe('File Creation', function () {

  beforeEach(function (done) {

    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.ember = helpers.createGenerator('ember:app', [
        '../../router',
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      helpers.mockPrompt(this.ember, {
        compassBootstrap: true
      });
      this.ember.options.coffee = false;
      this.ember.options['skip-install'] = true;

      done();
    }.bind(this));
  });

  it('every generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    require('../app');
    require('../router');
    require('../controller');
    require('../view');
    require('../model');
  });

  it('creates the expected files', function (done) {
    this.ember.run({}, function () {
      helpers.assertFiles(EXPECTED_FILES);
      done();
    });
  });

  it('properly links ember data', function (done) {
    var expected = [
      [
        'app/index.html',
        /<script src="@@ember_data"><\/script>/
      ]
    ];
    this.ember.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

<<<<<<< HEAD
  it('properly links config', function (done) {
    var expected = [
      [
        'app/index.html',
        /<script src="@@config"><\/script>/
=======
  it('properly links app config', function (done) {
    var expected = [
      [
        'app/index.html',
        /<script src="@@app_config"><\/script>/
>>>>>>> 66f26e9e5a7599da53cb99b85e8ef5864648349b
      ]
    ];
    this.ember.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates a CoffeeScript based project when --coffee is specified', function (done) {
    this.ember.options.coffee = true;
    this.ember.run({}, function () {
      assert.ok(fs.existsSync('app/scripts/app.coffee'));
      assert.ok(!fs.existsSync('app/scripts/router.js'));
      done();
    });
  });

  describe('the app name', function () {
    beforeEach(function () {
      this.ember.appname = 'some-app';
    });

    it('creates an application object named after the directory usually', function (done) {
      this.ember.run({}, function () {
        helpers.assertFile('app/scripts/app.js', /var SomeApp = window.SomeApp = Ember\.Application\.create\(\);/);
        done();
      });
    });
  });

  describe('store', function () {
    it('uses FixtureAdapter by default', function (done) {
      this.ember.run({}, function () {
        helpers.assertFile('app/scripts/store.js', /ApplicationAdapter = DS.FixtureAdapter;/);
        done();
      });
    });
  });
});
