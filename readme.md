# Ember.js Generator [![Build Status](https://secure.travis-ci.org/yeoman/generator-ember.png?branch=master)](http://travis-ci.org/yeoman/generator-ember)

Maintainer: [Anthony Bull](https://github.com/inkredabull)

The scaffolding tool for Ember.js apps.

![ScreenShot](https://raw.github.com/yeoman/generator-ember/master/project/img/screenshots/2013_07_17.png)

## Table of Contents

* [Pre-reqs](#pre-reqs)
* [Usage](#usage)
* [Generators](#generators)
  * [ember-model](#ember-model)
  * [ember-view](#ember-view)
  * [ember-controller](#ember-controller)
* [Options](#options)
* [Troubleshooting](#troubleshooting)
* [Changelog](#changelog)
* [TODO](#todo)
* [Contribute](#contribute)
  * [Basics](#basics)
  * [Tips](#tips)
* [Background](#background)
* [License](#license)

## Pre-reqs

* [npm](http://nodejs.org/)
* `npm install -g grunt-contrib-compass`
* Ruby 
 
You should have one path each for:

  `which ruby && which compass`

## Usage

* `npm install -g generator-ember`
* `mkdir webapp && cd webapp`
* `yo ember`
* `npm install -g grunt-mocha` 
* `grunt server`

A welcome page should appear in your browser.

## Generators

Add'l generators:

* ember:model
* ember:view
* ember:controller

### ember:model

Creates a model, views, handlebars, controllers, view/edit routes, and some basic fixtures given an arg, as in: 

`yo ember:model User name:string zipcode:number`

see:

* http://localhost:9000/#/users

see also:

* http://localhost:9000/#/user/1
* http://localhost:9000/#/user/1/edit
 
### ember:view

Creates a view and template given an arg, as in

  `yo ember:view Foo`

__KNOWN ISSUE: IF YOU ADD A NEW VIEW, REGARDLESS OF WITH WHICH GENERATOR, YOU HAVE TO RESTART THE SERVER.__ 

### ember:controller

Creates a view, handlebar, controller and route given an arg, as in:

  `yo ember:controller Bar`

(and updates router.js, overwrite when prompted)

see: 

* http://localhost:9000/#/bar

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

## Changelog
See the [changelog file](https://github.com/yeoman/generator-ember/blob/master/changelog.md)

## TODO

* Change tests to instantiate and test objects instead of grepping for text
* DRY up/refactor tests
* Consider ES6 as base structure
* Remove Ruby dependency

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
* script/reset_dev_env.sh is there to help when you don't want to wipe and reinstall a test dir with Bower and Node modules again-and-again; read it and understand it before you use it. It's good
if you want to smoke-test changes, bad if you update Bower and/or Node
mods (ignores removing their subdirs.)

## Background 

* Originally inspired by the [Ember Starter Kit](https://github.com/emberjs/starter-kit/archive/v1.0.0-rc.6.zip)
* Taking influence from [ember_data_example](https://github.com/dgeb/ember_data_example)

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
