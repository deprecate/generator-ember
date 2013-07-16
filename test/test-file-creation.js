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
  'app/scripts/router.js',
  'app/templates/application.hbs',
  'app/templates/index.hbs',
  'app/index.html'
];

describe('Ember', function () {
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

  describe('basics', function () {
    it('every generator can be required without throwing', function () {
      // not testing the actual run of generators yet
      this.app = require('../app');
      this.router = require('../router');
      this.controller = require('../controller');
      this.view = require('../view');
      this.model = require('../model');
    });
    it('creates a JavaScript based project by default', function (done) {
      this.ember.app.run({}, function () {
        assert.ok(fs.existsSync('app/scripts/app.js'));
        done();
      });
    });
  });

  describe('compass', function () {
    it('creates expected files without compassSass', function (done) {
      helpers.mockPrompt(this.ember.app, {
        'compassBootstrap': false
      });
      this.ember.app.run({}, function () {
        helpers.assertFiles(EXPECTED_FILES);
        helpers.assertFiles( ['app/styles/normalize.css', 'app/styles/style.css'] );
        done();
      });
    });

    it('creates expected files with compassSass', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertFiles(EXPECTED_FILES);
        done();
      });
    });
  });

  describe('subgenerators', function () {
    it('router', function (done) {
      this.router = {};
      this.router = helpers.createGenerator('ember:router', ['../../router']);

      assert(!fs.existsSync(this.router.router_file)); // router_file d.n.e. before invocation

      this.router.options.controller_files = ['foo_controller.js'];
      var router = this.router;
      this.router.run({}, function () {
        helpers.assertFiles( [ router.options.router_file ] );
        var content = fs.readFileSync(router.options.router_file);
        assert(content.toString().match(/route.*foo/));
        done();
      });
    });

    it('view');
    it('controller');
    it('model');
  });

  it('creates karma config file when using karma-runner', function (done) {
    this.ember.app.options['karma'] = true;
    this.ember.app.run({}, function () {
      assert.ok(fs.existsSync('karma.conf.js'));
      done();
    });
  });

  it('properly links ember data', function (done) {
    var expected = [
      [
        'app/index.html', 
        /<script src="bower_components\/ember-data-shim\/ember-data.js"><\/script>/
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
      done();
    });
  });

});
