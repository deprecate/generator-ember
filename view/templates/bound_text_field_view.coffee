<%= _.classify(appname) %>.BoundTextFieldView = Ember.TextField.extend(
  valueBinding: 'content.value',
  contentChanged: -> (
    @get('controller').get('model').set(
      @get('content').key,
      @get('content').value
    )
  ).observes('content.value')
)
