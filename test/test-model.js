/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

require('../lib/expected_model_files');

describe('Model', function () {

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      done();
    }.bind(this));
  });

  var filesDoNotExist = function(list_of_files){
    for (var i = 0; i < list_of_files.length; i++) {
      assert(!fs.existsSync(list_of_files[i]));
    }
  };

  it('does basic scaffolding', function (done) {
    this.model = {};
    this.model = helpers.createGenerator('ember:model', 
       ['../../model','../../controller','../../view','../../router'],
       ['foo', 'name:string', 'zipcode:number']);

    filesDoNotExist(FILES_GENERATED_BY_MODEL_SUBGEN);

    var model = this.model;
    this.model.run({}, function () {
      helpers.assertFiles( FILES_GENERATED_BY_MODEL_SUBGEN );
      var content = fs.readFileSync(FILES_GENERATED_BY_MODEL_SUBGEN[0]); // brittle
      assert(content.toString().match(/Foo = Ember.Object/));
      assert(content.toString().match(/name: DS.attr\('string'\)/));
      assert(content.toString().match(/zipcode: DS.attr\('number'\)/));
    });

    // there has to be a better way
    // to structure/include the following...
    this.router = {};
    this.router = helpers.createGenerator('ember:router', ['../../router']);

    filesDoNotExist([this.router.router_file]);

    var router = this.router;
    this.router.run({}, function () {
      helpers.assertFiles( [ router.options.router_file ] );
      var content = fs.readFileSync(router.options.router_file);
      assert(content.toString().match(/route.*foo/));
      done();
    });
  });

  it('takes singular noun and creates plural route, template for read of all')
  it('takes singular noun and creates singular controller, template for read')
  it('takes singular noun and creates singular route, controller for new')
  it('takes singular noun and creates singular route, controller, template for edit')
  //it('takes singular noun and creates singular route for delete')
  it('takes singular noun and creates plural route')
  it('takes singular noun and registers singular and plural routes with router')

});
