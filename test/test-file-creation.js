/*global describe:true, beforeEach:true, it:true */
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

describe('Basics', function () {
  
  beforeEach(function (done) {

    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.ember = {};
      this.ember.app = helpers.createGenerator('ember:app', [
        '../../router',
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      helpers.mockPrompt(this.ember.app, {
        'compassBootstrap': true
      });
      this.ember.app.options['coffee'] = false;
      this.ember.app.options['skip-install'] = true;
      done();
    }.bind(this));
  });
  
  it('every generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.app = require('../app');
    this.router = require('../router');
    this.controller = require('../controller');
    this.view = require('../view');
    this.model = require('../model');
  });

  it('creates the expected files', function (done) {
    this.ember.app.run({}, function () {
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
    this.ember.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates a CoffeeScript based project when --coffee is specified', function (done) {
    this.ember.app.options['coffee'] = true;
    this.ember.app.run({}, function () {
      assert.ok(fs.existsSync('app/scripts/app.coffee'));
      assert.ok(!fs.existsSync('app/scripts/router.js'));
      done();
    });
  });
  
  describe('the app name', function () {
    before(function (done) {
      helpers.stub(path, 'basename', function(dir) { return 'some-app'; });
      done();
    })
    after(function (done) {
      helpers.restore();
      done();
    });
    
    it('creates an application object named after the directory usually', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertFile('app/scripts/app.js', /var SomeApp = window.SomeApp = Ember\.Application\.create\(\);/);
        done();
      });
    });
  });

  describe('the app name, special case', function () {
    before(function (done) {
      helpers.stub(path, 'basename', function(dir) { return 'ember'; });
      done();
    })
    after(function (done) {
      helpers.restore();
      done();
    });
    
    it('creates an application object with a special name', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertFile('app/scripts/app.js', /var EmberApp = window.EmberApp = Ember\.Application\.create\(\);/);
        done();
      });
    });
  });

  describe('store', function () {
    it('uses FixtureAdapter by default', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertFile('app/scripts/store.js', /ApplicationAdapter = DS.FixtureAdapter;/);
        done();
      });
    });
  });
});
