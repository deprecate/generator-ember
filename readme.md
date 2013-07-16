# Ember.js Generator [![Build Status](https://secure.travis-ci.org/yeoman/generator-ember.png?branch=master)](http://travis-ci.org/yeoman/generator-ember)

Maintainer: [Anthony Bull](https://github.com/inkredabull)

## Table of Contents

* [Pre-reqs](#pre-reqs)
* [Usage](#usage)
* [Generators](#generators)
  * [ember](#ember)
  * [ember-view](#ember-view)
  * [ember-controller](#ember-controller)
  * [ember-model](#ember-model)
* [Options](#options)
* [Troubleshooting](#troubleshooting)
* [History](#history)
* [TODO](#todo)
* [Credits](#credits)
* [Contribute](#contribute)
  * [Basics](#basics)
  * [Tips](#tips)
* [License](#license)

## Pre-reqs
 
First, this generator requires that Ruby and Compass are installed and in your path.

  `which ruby && which compass`

If you do not see two paths, follow [these instructions](https://github.com/gruntjs/grunt-contrib-compass#compass-task).

Second, if you have not installed yo yet via npm, do this:

  `npm install -g yo grunt-cli bower`

## Usage

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
* ember:controller
* ember:model

### ember

Creates the basic infrastructure for your app. 

### ember:view

Creates a view and template given an arg, as in

  `yo ember:view Foo`

__KNOWN ISSUE: IF YOU ADD A NEW VIEW, REGARDLESS OF WITH WHICH GENERATOR, YOU HAVE TO RESTART THE SERVER.__ 

### ember:controller

Creates a view, handlebar, controller and route given an arg, as in:

  `yo ember:controller Bar`

(and updates router.js, overwrite when prompted)

see: http://localhost:9000/#/bar

### ember:model

Creates a model, view, handlebar, controller, and route given an arg, as in: 

`yo ember:model Baz name:string postal_code:number`

see http://localhost:9000/#/baz
 
## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--test-framework=[framework]`

  Defaults to `mocha`. Can be switched for another supported testing framework like `jasmine`.

* `--coffee`

  Enable support for CoffeeScript.

* `--karma`

  Enables support for karma test runner

## Testing
Testing your app is as simple as running `grunt test`. The generator ships with the
[karma test runner](http://karma-runner.github.io/0.8/index.html) for running the tests. Integration
tests are written with [ember-testing](https://github.com/emberjs/ember.js/tree/master/packages/ember-testing)
and preferably mocha. Karma is highly configurable and you can take a look at the varity of options
on [its website](http://karma-runner.github.io/0.8/index.html).

## Troubleshooting

### Command not found

Manifests as: `-bash: yo: command not found`

You need to make sure that npm is on your path.  Add the following to your .bash_profile (or .bashrc):

`PATH=/usr/local/share/npm/bin:$PATH`

### templateName issues

Manifests as: `You specified the templateName ... but it did not exist.`

You probably added a view; restart the server.

## History

### 0.5.2 (2013-07-15)

* Fixed [#79](https://github.com/yeoman/generator-ember/issues/79) (srsly considering dropping CoffeeScript support for now)

### 0.5.1 (2013-07-15)

* Re-introduced @fayimora's testing improvement; now working with `grunt test`
* documentation updates

### 0.5.0 (2013-07-13)

* Added basic scaffolding
* By default, include Ember Data

### 0.4.1 (2013-07-13)

* Reverted changes for testing improvement

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

## TODO

* Change tests to instantiate and test objects instead of grepping for text
* DRY up/refactor tests

## Credits

The Ember code is taken directly from the [1.0 RC6](https://github.com/emberjs/starter-kit/archive/v1.0.0-rc.6.zip)


## Contribute

### Basics

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

### Tips

Here are some of the techniques I use; maybe they're useful for you.

When developing...

* in generator-ember dir, `npm link` to use what's in the local repo for `yo ember`
* wipe the example webapp dir clean (`cd .. && rm -rf webapp`) from time-to-time to ensure the code output is coming from the latest generator (will re-install everything via npm, so be forewarned)

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
