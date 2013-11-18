<%= _.classify(appname) %>.<%= _.classify(pluralized_name) %>Route = Ember.Route.extend(
  model: ->
    @get('store').find('<%= _.slugify(name) %>')
)

