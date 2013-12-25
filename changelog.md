## History

### 0.7.2 (2013-12-24)
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

