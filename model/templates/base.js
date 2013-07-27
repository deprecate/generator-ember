<%= _.classify(appname) %>.<%= _.classify(name) %> = Ember.Object.extend({<% _.each(attrs, function(attr, i) { %>
    <%= _.camelize(attr.name) %>: DS.attr('<%= attr.type %>')<% if(i < (attributes.length - 1)) { %>,<% } %>
<% }); %>});
