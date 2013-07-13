# Ember generator [![Build Status](https://secure.travis-ci.org/yeoman/generator-ember.png?branch=master)](http://travis-ci.org/yeoman/generator-ember)

> Gets you started with a "Hello World" implementation of
[Ember](http://emberjs.com).

Maintainer: [Anthony Bull](https://github.com/inkredabull)


## Usage

First, this generator requires that Ruby and Compass are installed and in your path.

- `which ruby && which compass`

If you do not see two paths, follow [these instructions](https://github.com/gruntjs/grunt-contrib-compass#compass-task).

Second, if you have not installed yo yet via npm, do this:

- `npm install -g yo grunt-cli bower`

After installing yo, execute these steps one after another:

- `npm install -g generator-ember`
- `mkdir webapp && cd webapp`
- `yo ember`
- `npm install -g grunt-mocha` 
- `grunt server`

A page with "Welcome to Ember.js" should appear in your browser.

## Generators

Available generators:

* ember
* ember:view
* ember:model
* ember:controller
* ember:all
 
## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--test-framework=[framework]`

  Defaults to `mocha`. Can be switched for another supported testing framework like `jasmine`.

* `--coffee`

  Enable support for CoffeeScript.


## Troubleshooting

### `-bash: yo: command not found`

You need to make sure that npm is on your path.  Add the following to your .bash_profile (or .bashrc):

`PATH=/usr/local/share/npm/bin:$PATH`


## History

### 0.4.0 (2013-07-11)

* Added testing improvement
* Upgraded to RC6
* Upgraded to grunt-contrib-compass 0.3.0

### 0.3.1 (2013-06-18)

* Added install step to address [PhantomJS issue](https://github.com/yeoman/generator-webapp/issues/92)

### 0.3.0 (2013-06-16)

* Upgraded to Ember 1.0 RC5
* Support for scaffolding out CoffeeScript via `--coffee`
* Support for jasmine as alternative test framework via `--test-framework`
* Automatic script inclusions via [`grunt-neuter`](https://github.com/trek/grunt-neuter)
* New prompt


## Credits

The Ember code is taken directly from the [1.0 RC6](https://github.com/emberjs/starter-kit/archive/v1.0.0-rc.6.zip)


## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
