<%= _.classify(appname) %>.<%= _.classify(pluralized_name) %>Route = Ember.Route.extend({
  model: function() {
    return this.get('store').find('<%= _.slugify(name) %>');
  }
});

