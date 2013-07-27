describe("Index page", function () {
    it("displays a welcome message", function () {
        visit('/').then(function () {
            find('div.well').text().should.contain('Welcome to Yeoman and Ember.js');
        });
    });
});

describe("ApplicationRoute", function () {
    describe("model property", function () {
        var applicationRoute = <%= _.classify(appname) %>.ApplicationRoute.create();
        it("should have the right number of items", function () {
            var model = applicationRoute.model();
            model.should.have.length(3);
        });
    });
});

