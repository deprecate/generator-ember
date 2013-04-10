/*global describe:true, beforeEach:true, it:true */
'use strict';
var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('assert');

describe('Ember generator test', function() {
  beforeEach(function(done){
    helpers.testDirectory(path.join(__dirname, './temp'), function(err){
      if(err){
        return done(err);
      }
      this.ember = {};
      this.ember.all = helpers.createGenerator('ember:all',[
        '../../all', [
          helpers.createDummyGenerator(),
          'mocha:all'
        ]
      ]);
      done();
    }.bind(this));

  });

  it('every generator can be required without throwing', function() {
    // not testing the actual run of generators yet
    this.all = require('../all');
  });

  it('creates expected files', function(done) {
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

    helpers.mockPrompt(this.ember.all, {
      'compassBootstrap': 'Y'
    });

    this.ember.all.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });

  });

});
