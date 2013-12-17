/*global Ember*/
<%= _.classify(appname) %>.<%= _.classify(name) %> = DS.Model.extend({<% _.each(attrs, function(attr, i) { %>
    <%= _.camelize(attr.name) %>: DS.attr('<%= attr.type %>')<% if(i < (attributes.length - 1)) { %>,<% } %>
<% }); %>});

// probably should be mixed-in...
<%= _.classify(appname) %>.<%= _.classify(name) %>.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
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
