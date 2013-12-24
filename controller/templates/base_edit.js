<%= _.classify(appname) %>.<%= _.classify(name) %>EditController = Ember.ObjectController.extend({
  needs: '<%= name.toLowerCase() %>',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.<%=name.toLowerCase()%>.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('<%=name.toLowerCase()%>',this.get('model'));
    }
  }
});

