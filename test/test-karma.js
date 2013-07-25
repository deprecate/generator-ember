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
  'app/scripts/routes/application_route.js',
  'app/templates/application.hbs',
  'app/templates/index.hbs',
  'app/index.html'
];

describe('Karma', function () {
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

  it('creates files with correct syntax', function (done) {
    this.ember.app.options['karma'] = true;
    EXPECTED_FILES = [
      'karma.conf.js',
      'test/integration/index.js',
      'test/support/initializer.js'
    ];
    this.ember.app.run({}, function () {
      helpers.assertFiles(EXPECTED_FILES);

      var content = fs.readFileSync(EXPECTED_FILES[1]);
      assert(content.toString().match(/Temp.ApplicationRoute/));

      var content = fs.readFileSync(EXPECTED_FILES[2]);
      assert(content.toString().match(/Temp.rootElement/));

      done();
    });
  });
});
