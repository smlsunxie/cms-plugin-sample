window.modules = {}
React = window.React = require("react")
TodoApp = require("./Todo")
mountNode = document.getElementById("app")

React.renderComponent(<TodoApp />, mountNode);
