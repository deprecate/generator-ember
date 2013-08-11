<%= _.classify(appname) %>.BoundTextFieldView = Ember.TextField.extend({
  valueBinding: 'content.value',
  contentChanged: function() {
    this.get('controller').get('model').set(
      this.get('content').key,
      this.get('content').value
    ); // ugly, but gets the job done
  }.observes('content.value')
});
