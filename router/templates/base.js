<%= _.classify(appname) %>.Router.map(function () {
  <% _.each(attrs, function(attr, i) { %>
    this.route('<%= attr %>');
  <% }); %>
});


