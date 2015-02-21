/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/AppActions');

var APP = React.createClass({

  handleClick: function() {
    AppActions.addPeriod(this.props.period);
  },
  render: function() {
    return (
      <div>
        <h1>Flux with Deployd</h1>
        <button onClick={this.handleClick}>Add Period</button>
      </div>
    )
  }
});
module.exports = APP;
