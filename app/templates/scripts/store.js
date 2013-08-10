<%= _.classify(appname) %>.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});
