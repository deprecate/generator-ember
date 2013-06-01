/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

describe('Ember generator test', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      if (err) {
        return done(err);
      }
      this.ember = {};
      this.ember.app = helpers.createGenerator('ember:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      this.ember.app.options['skip-install'] = true;
      done();
    }.bind(this));

  });

  it('every generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.app = require('../app');
  });

  it('creates expected files with compassSass', function (done) {
    var expected = [
      '.gitignore',
      '.gitattributes',
      '.bowerrc',
      'bower.json',
      'package.json',
      '.jshintrc',
      '.editorconfig',
      'Gruntfile.js',
      'app/styles/normalize.css',
      'app/styles/style.css',
      'app/scripts/app.js',
      'app/templates/application.hbs',
      'app/templates/index.hbs',
      'app/index.html'
    ];

    helpers.mockPrompt(this.ember.app, {
      'compassBootstrap': 'N'
    });

    this.ember.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files without compassSass', function (done) {
    var expected = [
      '.gitignore',
      '.gitattributes',
      '.bowerrc',
      'bower.json',
      'package.json',
      '.jshintrc',
      '.editorconfig',
      'Gruntfile.js',
      'app/styles/style.scss',
      'app/scripts/app.js',
      'app/templates/application.hbs',
      'app/templates/index.hbs',
      'app/index.html'
    ];

    helpers.mockPrompt(this.ember.app, {
      'compassBootstrap': 'Y'
    });

    this.ember.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('properly links ember data when required', function (done) {
    var expected = [
      ['app/index.html', /<script src="bower_components\/ember-data-shim\/ember-data.js"><\/script>/]
    ];

    helpers.mockPrompt(this.ember.app, {
      'emberData': 'Y'
    });

    this.ember.app.options['skip-install'] = true;
    this.ember.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('does not link ember data when not required', function (done) {
    helpers.mockPrompt(this.ember.app, {
      'emberData': 'n'
    });

    this.ember.app.options['skip-install'] = true;
    this.ember.app.run({}, function () {
      var fileContents = fs.readFileSync('app/index.html', 'utf8');
      var reg = /<script src="bower_components\/ember-data-shim\/ember-data.js"><\/script>/;
      assert.ok(!reg.test(fileContents));
      done();
    });
  });

  it('creates a CoffeeScript based project when --coffee is specified', function (done) {
    helpers.mockPrompt(this.ember.app, {
      'emberData': 'Y',
      'compassBootstrap': 'Y'
    });

    this.ember.app.options['skip-install'] = true;
    this.ember.app.options['coffee'] = true;

    this.ember.app.run({}, function () {
      assert.ok(fs.existsSync('app/scripts/app.coffee'));
      done();
    });
  });

  it('creates a JavaScript based project by default', function (done) {
    helpers.mockPrompt(this.ember.app, {
      'emberData': 'Y',
      'compassBootstrap': 'Y'
    });

    this.ember.app.options['skip-install'] = true;
    this.ember.app.options['coffee'] = false;

    this.ember.app.run({}, function () {
      assert.ok(fs.existsSync('app/scripts/app.js'));
      done();
    });
  });
});
