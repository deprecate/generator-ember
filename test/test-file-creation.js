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
