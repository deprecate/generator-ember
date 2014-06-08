## History


### 0.8.4 (2014-06-08)
* ember:component
* allow emberTemplates to compile nested templates
* updated jquery script to point to dist/jquery inside bower_component
* added test/bower_components to gitignore template
* updates grunt-neuter version from 0.5.0 to 0.6.0
* pullout getJSPath
* dont add coffee package if option not specified
* Use SVG badge for Travis
* Forgotten hardcoded path to `app`
* Added test for generation of singular controller stub
* Add support for singular base controller generation
* Fix Karma's loading of CoffeeScript tests.
* Adds singleRun option in grunts karma config
* Updates file location of chai.js in karma.conf.js
* Adds karma-chrome-launcher to devDependencies
* Updates karma dependencies
* fixed route in coffeescript template
* remove unnecessary comment
* Switch to official twitter bootstrap sass package
* "Twitter Bootstrap" is now simply Bootstrap
* Clarify compass gem requirement
* Remove `Ember.testing = true`
* Create test container before setting App.rootElement
* Automated usage of Bootstrap Fonts now checks if compassBootstrap is enabled first. See #175.

### 0.8.3 (2014-02-12)
* Upgrade ember to 1.3.2 :heavy_exclamation_mark:
* Fix incorrect path of chai.js for karma
* Explicitly state handlebars dependency (1.2.1)

### 0.8.2 (2014-02-09)
 * Fix PhantomJS time out bug
 * Fix bug in test helpers where #ember-testing-container wasn't found
 * Fix ember-data and chai paths in generated karma.conf.js :heavy_exclamation_mark:
 * Newly scaffolded project now comes with a default empty router

### 0.8.1 (2014-01-15)
* `grunt server` is now deprecated. Use `grunt serve` instead
* Upgrade Ember to 1.3.1(security critical) and Ember Data to 1.0.0.beta.5
* Generator now includes compass ONLY if user wants it
* Replace the deprecated 'linkTo' helper with the recommended link-to helper in templates
* Add a note about ES6 modules

### 0.8.0 (2013-12-24)

* All generated scripts and templates have been updated to use the latest ember syntax as of v1.2.0.
  See [this post](http://emberjs.com/blog/2013/12/04/ember-1-2-0-and-ember-1-3-0-beta-released.html#toc_non-block-form-link-to-helper)
  and [this entry in the changelog](https://github.com/emberjs/ember.js/blob/v1.2.0/CHANGELOG#L132)
* The generator ships with ember v1.2.0
* Better coffee-script syntax
* Generated edit template now goes into expected subfolder. So `yo ember:model User name age:number`
  will place the edit template in `user/edit.hbs`
* The generated views no longer explicitly define `templateName` as Ember's default resolver knows
  where to find the templates
* Removed hardcoded user.edit link.
* CoffeeScript support has been added to the sub-generators. `yo ember:controller Users --coffee`
  will now generate a controller in CoffeeScript
* More concise REST routes in router as described in [An In-depth Introduction to Ember.js](http://coding.smashingmagazine.com/2013/11/07/an-in-depth-introduction-to-ember-js/#instantiate_the_router)
* The build task now uses the production version of ember.
* Remove Unecessary File From App Generation

### 0.7.1 (2013-10-20)

* Fix Bootstrap 3 template
* Fix for #111, #92: karma picking up the wrong files
* Use model hooks for generated routes for Ember 1.0
* Remove Application Store's adapter field

### 0.7.0 (2013-10-16)

* Updated for Ember 1.0.0
* Updated Ember Data
* Updated for Bootstrap 3
* Fixed hardcoded `user` model in template
* JSHint fixes
* Updated karma

### 0.6.2 (2013-08-25)

* Hotfix for template compilation

### 0.6.1 (2013-08-25)

* Compatibility fix for yo 1.0

### 0.6.0 (2013-08-10)

* Substantial update for scaffolding
* Assuming FixtureAdapter to start
* Changed base model to DS.Model

### 0.5.10 (2013-08-04)

* Fixed issue where generator invoked in 'ember' dir
* Fixed issue where routes in router.js were blasted on model subgen invocation
* Reordered app script requires and added store.js

### 0.5.9 (2013-07-25)

* modified for [CVE-2013-4170](http://emberjs.com/blog/2013/07/25/ember-1-0-rc6-1-rc5-1-rc4-1-rc3-1-rc2-1-and-rc1-1-released.html)

### 0.5.8 (2013-07-25)

* fixed karma-based app gen
* simplication of install

### 0.5.7 (2013-07-18)

* abandon dependencies changes; not working

### 0.5.6 (2013-07-18)

* change dependencies for npm

### 0.5.5 (2013-07-18)

* more dependency-moving out of readme

### 0.5.4 (2013-07-18)

* moving dependencies out of readme

### 0.5.3 (2013-07-17)

* new look!
* tests!

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

