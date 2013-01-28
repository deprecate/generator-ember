var util = require('util');
var yeoman = require('yeoman-generator');


module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/images');
};

Generator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

Generator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

Generator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

Generator.prototype.packageJSON = function packageJSON() {
  this.template('package.json');
};

Generator.prototype.indexFile = function createIndexFile() {
  this.template('index.html', 'app/index.html');
};

Generator.prototype.styleFile = function createStyleFile() {
  this.template('styles/style.css', 'app/styles/style.css');
};

Generator.prototype.gruntFile = function createGruntFile() {
  this.template('Gruntfile.js', 'Gruntfile.js');
};
