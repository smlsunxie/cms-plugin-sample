var React, Timer, div;

React = require("react");

div = React.DOM.div;

Timer = React.createClass({
  getInitialState: function() {
    return {
      secondsElapsed: 0
    };
  },
  tick: function() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return div(null, "Seconds Elapsed:" + this.state.secondsElapsed);
  }
});

module.exports = Timer;