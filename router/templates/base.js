<%= _.classify(appname) %>.Router.map(function () {
  <% _.each(models, function(model, i) { %>
  this.resource('<%= model.plural %>');
  this.resource('<%= model.single %>', { path: '/<%= model.single %>/:<%= model.single %>_id' });
  this.resource('<%= model.single %>.edit', { path: '/<%= model.single %>/:<%= model.single %>_id/edit' });
  <% }); %>
});
