<%= _.classify(appname) %>.<%= _.classify(name) %>EditController = Ember.ObjectController.extend(
  save: ->
    # we're cheating here that there's no commit()
    # but the UI element is already bound to the model
    @transitionToRoute '<%= name.toLowerCase() %>', @get('model')
)
