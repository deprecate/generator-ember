App = window.App = Ember.Application.create()

# Order and include as you please.
# require('scripts/routes/*')
# require('scripts/controllers/*')
# require('scripts/models/*')
# require('scripts/views/*')

App.Router.map ->
  # routes here

App.Store = DS.Store.extend {
}

App.IndexRoute = Ember.Route.extend
  model: -> ['red', 'yellow', 'blue']
