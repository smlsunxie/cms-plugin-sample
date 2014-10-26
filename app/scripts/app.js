var React, TodoApp, mountNode;

window.modules = {};

React = window.React = require("react");

TodoApp = require("./Todo");

mountNode = document.getElementById("app");

React.renderComponent(React.createElement(TodoApp, null), mountNode);
