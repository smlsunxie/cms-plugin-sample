Timer = require("./Timer")

TodoList = React.createClass(
  render: ->
    createItem = (itemText) ->
      <li>{itemText?.name || itemText}</li>
    <ul>{this.props.items.map(createItem)}</ul>

)

TodoApp = React.createClass(
  getInitialState: ->
    that = @

    client.models.Route.action "cms-plugin-sample", "get", {}, (error, result) ->
      that.setState
        items: result
        text: ""

    items: []
    text: ""

  onChange: (e) ->
    @setState text: e.target.value

  handleSubmit: (e) ->
    e.preventDefault()
    nextItems = @state.items.concat([@state.text])
    nextText = ""

    that = @
    client.models.Route.action "cms-plugin-sample", "post", {name: that.state.text}, (error, result) ->

      that.setState
        items: nextItems
        text: nextText

  render: ->

    <div>
      <h3>TODO</h3>
      <TodoList items={this.state.items} />
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.onChange} value={this.state.text} />
        <button>{'Add #' + (this.state.items.length + 1)}</button>
      </form>
      <Timer />
    </div>
)

window.modules["todo"] = TodoApp
module.exports = TodoApp
