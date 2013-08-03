<%= _.classify(appname) %>.Router.map(function () {
  // Register routes
    <% _.each(attrs, function(attr, i) { %>
        this.route('<%= attr %>');
    <% }); %>
});
