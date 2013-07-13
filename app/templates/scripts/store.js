<% if (emberData) { %>
// if you're looking at this, you probably know what you're doing...
if(DS){
  <%= _.classify(appname) %>.Store = DS.Store.extend({});
}
<% } %>
