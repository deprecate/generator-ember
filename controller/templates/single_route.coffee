<%= _.classify(appname) %>.<%= _.classify(name) %>Route = Ember.Route.extend(
  model: (model) ->
    @get('store').find('<%= _.slugify(name) %>', model.<%= _.slugify(name) %>_id)
)

