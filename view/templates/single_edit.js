<%= _.classify(appname) %>.<%= _.classify(name) %>EditView = Ember.View.extend({
    templateName: '<%= _.underscored(name+'Edit') %>'
});
