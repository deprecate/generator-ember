/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');

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

  it('creates expected files', function (done) {
    var expected = [
      '.gitignore',
      '.gitattributes',
      '.bowerrc',
      'component.json',
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
      'compassBootstrap': 'Y'
    });

    this.ember.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
