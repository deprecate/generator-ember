<%= _.classify(appname) %>.<%= _.classify(name) %>View = Ember.View.extend({
    templateName: '<%= _.underscored(name) %>'
});
