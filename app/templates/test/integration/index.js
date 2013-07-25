describe("Index page", function () {
  it("displays a welcome message", function () {
    visit('/').then(function () {
      find('h2').text().should.equal('Welcome to Ember.js');
    });
  });
});

describe("IndexRoute", function () {
  describe("model property", function () {
    var indexRoute = <%= _.classify(appname) %>.IndexRoute.create();
    it("should have the right number of items", function () {
      var model = indexRoute.model();
      model.should.have.length(3);
    });
  });
});

