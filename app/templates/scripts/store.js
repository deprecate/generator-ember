<%= _.classify(appname) %>.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter.create()
});
