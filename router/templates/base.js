<%= _.classify(appname) %>.Router.map(function () {
  <% _.each(models, function(model, i) { %>
  this.resource('<%= model.plural %>', function(){
    this.resource('<%= model.single %>', { path: '/:<%= model.single %>_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  <% }); %>
});
