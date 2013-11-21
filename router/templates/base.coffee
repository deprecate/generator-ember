<%= _.classify(appname) %>.Router.map( ->
  <% _.each(models, function(model, i) { %>
  @resource('<%= model.plural %>', ->
    @resource('<%= model.single %>', path: '/:<%= model.single %>_id', ->
      @route('edit')
    )
    @route('create')
  )
  <% }); %>
)
