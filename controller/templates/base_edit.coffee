<%= _.classify(appname) %>.<%= _.classify(name) %>EditController = Ember.ObjectController.extend(
  needs: '<%=name.toLowerCase()%>'
  actions:
    save: ->
      self = this
      @get('buffer').forEach (attr)->
        self.get('controllers.<%=name.toLowerCase()%>.model').set(attr.key, attr.value)
      @transitionToRoute '<%= name.toLowerCase() %>', @get('model')
)
