'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var EmberGenerator = module.exports = function EmberGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  
  if (this.appname.match(/ember/i)) {
    this.appname += '_app';
  }

  this.hookFor('ember:router');

  // setup the test-framework property, Gruntfile template will need this
  this.testFramework = options['test-framework'] || 'mocha';

  // for hooks to resolve on mocha by default
  if (!options['test-framework']) {
    options['test-framework'] = 'mocha';
  }

  // hook for CoffeeScript
  this.options.coffee = options.coffee;

  // hook for karma test runner
  this.options.karma = options.karma;

  // resolved to mocha by default (could be switched to jasmine for instance)
  this.hookFor('test-framework', { as: 'app' });

  this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  // this holds the list of scripts we want to include in components.js
  this.bowerScripts = [
    'bower_components/jquery/jquery.js',
    'bower_components/handlebars/handlebars.runtime.js',
    'bower_components/ember/ember-1.0.0-rc.6.1.js',
    'bower_components/ember-data-shim/ember-data.js'
  ];

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });
};

util.inherits(EmberGenerator, yeoman.generators.Base);

EmberGenerator.prototype._getJSPath = function _getJSPath(file) {
  return file + (this.options.coffee ? '.coffee' : '.js');
};

EmberGenerator.prototype.welcome = function welcome() {
  // welcome message
  console.log(this.yeoman);
};

EmberGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    type: 'confirm',
    name: 'compassBootstrap',
    message: 'Would you like to include Twitter Bootstrap for Sass?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.compassBootstrap = props.compassBootstrap;

    cb();
  }.bind(this));
};

EmberGenerator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('app/templates');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.mkdir('app/scripts');
  this.mkdir('app/scripts/models');
  this.mkdir('app/scripts/controllers');
  this.mkdir('app/scripts/routes');
  this.mkdir('app/scripts/views');
  this.mkdir('app/libs');
};

EmberGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

EmberGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

EmberGenerator.prototype.packageFile = function packageFile() {
  this.copy('_package.json', 'package.json');
};

EmberGenerator.prototype.jshint = function jshint() {
  this.copy('_jshintrc', '.jshintrc');
};

EmberGenerator.prototype.tests = function tests() {
  if (this.options.karma) {
    this.mkdir('test');
    this.mkdir('test/support');
    this.mkdir('test/integration');
    this.copy('karma.conf.js', 'karma.conf.js');

    this.template(this._getJSPath('test/_initializer'), this._getJSPath('test/support/initializer'));
    this.template(this._getJSPath('test/integration/_index'), this._getJSPath('test/integration/index'));
  }
};

EmberGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

EmberGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

EmberGenerator.prototype.templates = function templates() {
  this.copy('hbs/application.hbs', 'app/templates/application.hbs');
  this.copy('hbs/index.hbs', 'app/templates/index.hbs');
};

EmberGenerator.prototype.writeIndex = function writeIndex() {
  var mainCssFiles = [];
  if (this.compassBootstrap) {
    mainCssFiles.push('styles/style.css');
  } else {
    mainCssFiles.push('styles/normalize.css');
    mainCssFiles.push('styles/style.css');
  }

  this.indexFile = this.appendStyles(this.indexFile, 'styles/main.css', mainCssFiles);

  this.indexFile = this.appendScripts(this.indexFile, 'scripts/components.js', this.bowerScripts);

  this.indexFile = this.appendFiles(this.indexFile, 'js', 'scripts/templates.js', ['scripts/compiled-templates.js'], null, '.tmp');
  this.indexFile = this.appendFiles(this.indexFile, 'js', 'scripts/main.js', ['scripts/combined-scripts.js'], null, '.tmp');
};

EmberGenerator.prototype.bootstrapJavaScript = function bootstrapJavaScript() {
  if (!this.compassBootstrap) {
    return;  // Skip if disabled.
  }
  // Wire Twitter Bootstrap plugins
  this.indexFile = this.appendScripts(this.indexFile, 'scripts/plugins.js', [
    'bower_components/bootstrap-sass/js/bootstrap-affix.js',
    'bower_components/bootstrap-sass/js/bootstrap-alert.js',
    'bower_components/bootstrap-sass/js/bootstrap-dropdown.js',
    'bower_components/bootstrap-sass/js/bootstrap-tooltip.js',
    'bower_components/bootstrap-sass/js/bootstrap-modal.js',
    'bower_components/bootstrap-sass/js/bootstrap-transition.js',
    'bower_components/bootstrap-sass/js/bootstrap-button.js',
    'bower_components/bootstrap-sass/js/bootstrap-popover.js',
    'bower_components/bootstrap-sass/js/bootstrap-typeahead.js',
    'bower_components/bootstrap-sass/js/bootstrap-carousel.js',
    'bower_components/bootstrap-sass/js/bootstrap-scrollspy.js',
    'bower_components/bootstrap-sass/js/bootstrap-collapse.js',
    'bower_components/bootstrap-sass/js/bootstrap-tab.js'
  ]);
};

EmberGenerator.prototype.all = function all() {
  this.write('app/index.html', this.indexFile);

  if (this.compassBootstrap) {
    this.copy('styles/style_bootstrap.scss', 'app/styles/style.scss');
  } else {
    this.copy('styles/normalize.css', 'app/styles/normalize.css');
    this.copy('styles/style.css', 'app/styles/style.css');
  }

  this.copy('scripts/libs/ember-1.0.0-rc.6.1.js', 'app/bower_components/ember/ember-1.0.0-rc.6.1.js');
  this.copy('scripts/libs/handlebars.runtime.js', 'app/bower_components/handlebars/handlebars.runtime.js');
  this.copy('scripts/libs/ember-data.js', 'app/bower_components/ember-data-shim/ember-data.js');

  this.copy(this._getJSPath('scripts/app'), this._getJSPath('app/scripts/app'));
  this.copy(this._getJSPath('scripts/store'), this._getJSPath('app/scripts/store'));
  this.copy(this._getJSPath('scripts/routes/application_route'), this._getJSPath('app/scripts/routes/application_route'));
};
