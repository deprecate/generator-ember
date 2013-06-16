describe "Index page", ->
  it "displays a welcome message", ->
    visit('/').then ->
      find('h2').text().should.equal 'Welcome to Ember.js'

describe "IndexRoute", ->
  describe "model property", ->
    indexRoute = App.IndexRoute.create()

    it "should have the right number of items", ->
      model = indexRoute.model()
      model.should.have.length 3
