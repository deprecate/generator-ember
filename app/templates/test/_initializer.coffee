expect = chai.expect
assert = chai.assert
should = chai.should()

chai.Assertion.includeStack = true

Ember.testing = true
<%= _.classify(appname) %>.rootElement = "#ember-testing"
Ember.Test.adapter = Ember.Test.MochaAdapter.create()

<%= _.classify(appname) %>.setupForTesting()
<%= _.classify(appname) %>.injectTestHelpers()
Ember.run <%= _.classify(appname) %>, <%= _.classify(appname) %>.advanceReadiness

window.start = ->
window.stop = ->

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { position: absolute; background: white; bottom: 0; right: 0; width: 800px; height: 500px; overflow: auto; z-index: 9999; border: 5px solid #ccc; } #ember-testing { zoom: 80%; }</style>');

