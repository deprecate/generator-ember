<%= _.classify(appname) %>.<%= _.classify(name) %>EditRoute = Ember.Route.extend({
  model: function(model) {
    return <%= _.classify(appname) %>.<%= _.classify(name) %>.find(model.<%= _.slugify(name) %>_id);
  }
});

