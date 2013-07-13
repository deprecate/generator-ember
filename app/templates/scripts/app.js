var <%= _.classify(appname) %> = window.<%= _.classify(appname) %> = Ember.Application.create();

/* Order and include as you please. */
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/views/*');
require('scripts/router');
