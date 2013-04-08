var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
  this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('app/js');
  this.mkdir('app/css');
};

Generator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

Generator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('component.json', 'component.json');
};

Generator.prototype.packageFile = function () {
  this.copy('package.json', 'package.json');
};

Generator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

Generator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

Generator.prototype.gruntfile = function gruntfile() {
  this.copy('Gruntfile.js', 'Gruntfile.js');
};

Generator.prototype.writeIndex = function writeIndex() {
  this.indexFile = this.appendScripts(this.indexFile, 'scripts/components.js', [
    'components/jquery/jquery.js',
    'components/handlebars/handlebars.js',
    'components/ember/ember.js',
  ]);

  this.indexFile = this.appendScripts(this.indexFile, 'scripts/main.js', [
    'js/app.js'
  ]);
}

Generator.prototype.mainStylesheet = function mainStylesheet() {
  this.copy('css/normalize.css', 'app/css/normalize.css');
  this.copy('css/style.css', 'app/css/style.css');
};

Generator.prototype.all = function all() {
  this.write('app/index.html', this.indexFile);
  this.copy('js/app.js', 'app/js/app.js');
};
