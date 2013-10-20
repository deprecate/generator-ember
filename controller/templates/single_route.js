<%= _.classify(appname) %>.<%= _.classify(name) %>Route = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('<%= _.slugify(name) %>', model.<%= _.slugify(name) %>_id);
  }
});

