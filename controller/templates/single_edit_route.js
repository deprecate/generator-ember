<%= _.classify(appname) %>.<%= _.classify(name) %>EditRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('<%= _.slugify(name) %>', this.modelFor('<%= _.slugify(name)%>').id);
  },
  setupController: function(controller, model){
    controller.set('model', model);
    buffer = model.get('attributes').map(function(attr){
      return { key: attr.get('key'), value: attr.get('value') }
    });
    controller.set('buffer', buffer)
  }
});

