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
      'index.html',
      'css/normalize.css',
      'css/style.css',
      'js/libs/ember-1.0.0-rc.2.js',
      'js/libs/handlebars-1.0.0-rc.3.js',
      'js/libs/jquery-1.9.1.js'
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
