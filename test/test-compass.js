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
  'app/templates/application.hbs',
  'app/templates/index.hbs',
  'app/index.html'
];

describe('compassBootstrap', function () {

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
      this.ember.app.options['coffee'] = false;
      this.ember.app.options['skip-install'] = true;
      done();
    }.bind(this));
  });

  describe('true', function () {

    beforeEach(function () {
      helpers.mockPrompt(this.ember.app, {
        compassBootstrap: true
      });
    });

    it('create expected files', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertFile(EXPECTED_FILES);
        done();
      });
    });

    it('add compass as an npm dependency', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertFileContent('package.json', /grunt-contrib-compass/);
        done();
      });
    });

    it('add compass configuration to Gruntfile', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertFileContent('Gruntfile.js', /compass:/);
        done();
      });
    });

  });

  describe('false', function () {

    beforeEach(function () {
      helpers.mockPrompt(this.ember.app, {
        compassBootstrap: false
      });
    });

    it('create expected files', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertFile(EXPECTED_FILES);
        helpers.assertFile( ['app/styles/normalize.css', 'app/styles/style.css'] );
        done();
      });
    });

    it('do not add compass as an npm dependency', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertNoFileContent('package.json', /grunt-contrib-compass/);
        done();
      });
    });

    it('do not add compass configuration to Gruntfile', function (done) {
      this.ember.app.run({}, function () {
        helpers.assertNoFileContent('Gruntfile.js', /compass:/);
        done();
      });
    });

  });
});
