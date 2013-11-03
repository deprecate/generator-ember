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

describe('Compass', function () {

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
});
