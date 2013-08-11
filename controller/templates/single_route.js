<%= _.classify(appname) %>.<%= _.classify(name) %>Route = Ember.Route.extend({
  model: function(model) {
    return <%= _.classify(appname) %>.<%= _.classify(name) %>.find(model.<%= _.slugify(name) %>_id);
  }
});

