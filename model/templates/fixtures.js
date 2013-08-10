<%= _.classify(appname) %>.<%= _.classify(name) %>.FIXTURES = [
  <% var ids = [1,2]; _.each(ids, function(idx, id) { %>
  {
    id: <%= id %>,
    <% _.each(attrs, function(attr, i) { %>
    <%= attr.name %>: 'foo'<% if(i < (attrs.length - 1)) { %>,<% } %>
    <% }); %>
  }<% if(id < (ids.length - 1)) { %>,<% } %>
  <% }); %>
];
