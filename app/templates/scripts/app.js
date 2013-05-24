/*global Ember */

var App = window.App = Ember.Application.create();

/* Order and include as you please. */
// require('app/scripts/routes/*');
// require('app/scripts/controllers/*');
// require('app/scripts/models/*');
// require('app/scripts/views/*');

App.Router.map(function () {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return ['red', 'yellow', 'blue'];
  }
});
