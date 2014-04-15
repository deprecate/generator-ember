module.exports = function getJSPath (file) {
  return file + (this.options.coffee ? '.coffee' : '.js');
};
