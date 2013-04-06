var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('js');
  this.mkdir('js/libs');
  this.mkdir('css');
};

Generator.prototype.indexFile = function createIndexFile() {
  this.template('index.html', 'index.html');

  // yes, I know this isn't exactly where the following
  // are supposed to go; it's the poor man's Saturday
  // afternoon solution...
  this.copy('js/app.js', 'js/app.js');

  this.copy('js/libs/ember-1.0.0-rc.2.js', 'js/libs/ember-1.0.0-rc.2.js');
  this.copy('js/libs/handlebars-1.0.0-rc.3.js', 'js/libs/handlebars-1.0.0-rc.3.js');
  this.copy('js/libs/jquery-1.9.1.js', 'js/libs/jquery-1.9.1.js');

  this.copy('css/normalize.css', 'css/normalize.css');
  this.copy('css/style.css', 'css/style.css');
};
