<%= _.classify(appname) %>.<%= _.classify(name) %>EditController = Ember.ObjectController.extend({
  save: function(){
    // we're cheating here that there's no commit()
    // but the UI element is already bound to the model
    this.transitionToRoute('user',this.get('model'));
  }
});

