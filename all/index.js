var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
  this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('app/templates');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.mkdir('app/scripts');
  this.mkdir('app/scripts/models');
  this.mkdir('app/scripts/controllers');
  this.mkdir('app/scripts/routes');
  this.mkdir('app/scripts/views');
};

Generator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

Generator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_component.json', 'component.json');
};

Generator.prototype.packageFile = function packageFile() {
  this.copy('_package.json', 'package.json');
};

Generator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

Generator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

Generator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};


Generator.prototype.templates = function templates() {
  this.copy('hbs/application.hbs', 'app/templates/application.hbs');
  this.copy('hbs/index.hbs', 'app/templates/index.hbs');
};

Generator.prototype.writeIndex = function writeIndex() {
  this.indexFile = this.appendStyles(this.indexFile, 'styles/main.css', [
    'styles/normalize.css',
    'styles/style.css'
  ]);

  this.indexFile = this.appendScripts(this.indexFile, 'scripts/components.js', [
    'components/jquery/jquery.js',
    'components/handlebars/handlebars.runtime.js',
    'components/ember/ember.js'
  ]);

  this.indexFile = this.appendScripts(this.indexFile, 'scripts/main.js', [
    'scripts/app.js',
    'scripts/compiled-templates.js'
  ]);
};

Generator.prototype.all = function all() {
  this.write('app/index.html', this.indexFile);
  this.copy('styles/normalize.css', 'app/styles/normalize.css');
  this.copy('styles/style.css', 'app/styles/style.css');
  this.copy('scripts/app.js', 'app/scripts/app.js');
};
