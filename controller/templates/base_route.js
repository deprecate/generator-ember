<%= _.classify(appname) %>.<%= _.classify(pluralized_name) %>Route = Ember.Route.extend({
  model: function() {
    return <%= _.classify(appname) %>.<%= _.classify(name) %>.find();
  }
});

