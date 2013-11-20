<%= _.classify(appname) %>.<%= _.classify(name) %> = DS.Model.extend(
  <% _.each(attrs, function(attr, i) {  %>
    <%= _.camelize(attr.name) %>: DS.attr('<%= attr.type %>')<% if(i < (attributes.length - 1)) { %>,<% } %>
  <% }); %>
)

# probably should be mixed-in...
<%= _.classify(appname) %>.<%= _.classify(name) %>.reopen(

  # certainly I'm duplicating something that exists elsewhere...
  attributes: -> (
    attrs = []
    model = @
    Ember.$.each(Ember.A(Ember.keys(@get('data'))), (idx, key) ->
      pair = key: key, value: model.get(key)
      attrs.push(pair)
    )
    attrs
  ).property()
)

# delete below here if you do not want fixtures
<%= _.classify(appname) %>.<%= _.classify(name) %>.FIXTURES = [
  <% var ids = [1,2]; _.each(ids, function(idx, id) { %>
    id: <%= id %>
    <% _.each(attrs, function(attr, i) { %>
    <%= attr.name %>: 'foo'
    <% }); %>
  <% }); %>
]
