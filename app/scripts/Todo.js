var Timer, TodoApp, TodoList;

Timer = require("./Timer");

TodoList = React.createClass({
  render: function() {
    var createItem;
    createItem = function(itemText) {
      return React.createElement(React.DOM.li, null, (itemText != null ? itemText.name : void 0) || itemText);
    };
    return React.createElement(React.DOM.ul, null, this.props.items.map(createItem));
  }
});

TodoApp = React.createClass({
  getInitialState: function() {
    var that;
    that = this;
    client.models.Route.action("cms-plugin-sample", "get", {}, function(error, result) {
      return that.setState({
        items: result,
        text: ""
      });
    });
    return {
      items: [],
      text: ""
    };
  },
  onChange: function(e) {
    return this.setState({
      text: e.target.value
    });
  },
  handleSubmit: function(e) {
    var nextItems, nextText, that;
    e.preventDefault();
    nextItems = this.state.items.concat([this.state.text]);
    nextText = "";
    that = this;
    return client.models.Route.action("cms-plugin-sample", "post", {
      name: that.state.text
    }, function(error, result) {
      return that.setState({
        items: nextItems,
        text: nextText
      });
    });
  },
  render: function() {
    return React.createElement(React.DOM.div, null, React.createElement(React.DOM.h3, null, "TODO"), React.createElement(TodoList, {
      "items": this.state.items
    }), React.createElement(React.DOM.form, {
      "onSubmit": this.handleSubmit
    }, React.createElement(React.DOM.input, {
      "onChange": this.onChange,
      "value": this.state.text
    }), React.createElement(React.DOM.button, null, 'Add #' + (this.state.items.length + 1))), React.createElement(Timer, null));
  }
});

window.modules["todo"] = TodoApp;

module.exports = TodoApp;
