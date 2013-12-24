<%= _.classify(appname) %>.<%= _.classify(name) %> = DS.Model.extend
  <% _.each(attrs, function(attr, i) {  %>
    <%= _.camelize(attr.name) %>: DS.attr('<%= attr.type %>')
    <%})%>

# probably should be mixed-in...
<%= _.classify(appname) %>.<%= _.classify(name) %>.reopen
  # certainly I'm duplicating something that exists elsewhere...
  attributes: ( ->
    model = this
    Em.keys(@get('data')).map (key)->
      Em.Object.create(model: model, key: key, valueBinding: 'model.' + key)
  ).property()

# delete below here if you do not want fixtures
<%= _.classify(appname) %>.<%= _.classify(name) %>.FIXTURES = [
<% var ids = [1,2]; _.each(ids, function(idx, id) { %>
  { id: <%= id %>, <% _.each(attrs, function(attr, i) { %> <%= attr.name %>: 'foo',<%});%> },
<% }); %>
]
