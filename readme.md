# Ember generator [![Build Status](https://secure.travis-ci.org/yeoman/generator-ember.png?branch=master)](http://travis-ci.org/yeoman/generator-ember)

> Gets you started with a "Hello World" implementation of
[Ember](http://emberjs.com).

Maintainer: [Anthony Bull](https://github.com/inkredabull)


## Usage

First, if you have not installed yo yet via npm, do this:

- `npm install -g yo grunt-cli bower`

After installing yo, execute these steps one after another:

- `npm install -g generator-ember`
- `mkdir webapp && cd webapp`
- `yo ember`
- `grunt server --force`

A page with "Welcome to Ember.js" should appear in your browser.

## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--test-framework=[framework]`

  Defaults to `mocha`. Can be switched for another supported testing framework like `jasmine`.


## Troubleshooting 

### `-bash: yo: command not found`

You need to make sure that npm is on your path.  Add the following to your .bash_profile (or .bashrc):

`PATH=/usr/local/share/npm/bin:$PATH`

## Credits

The Ember code is taken directly from the [1.0 RC3](https://github.com/emberjs/starter-kit/archive/v1.0.0-rc.3.zip)


## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
