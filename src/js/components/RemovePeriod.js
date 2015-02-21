/** @jsx React.DOM */

var React = require('react');
var PeriodActions = require('../actions/PeriodActions');

var Header = React.createClass({
  handleClick: function() {
    PeriodActions.removePeriod(this.props.index);
  },
  render: function() {
    var removeButton;
    if (this.props.index) {
      removeButton = <button onClick={this.handleClick}>Remove period</button>;
    } else {
      removeButton = <button disabled>Remove period</button>;
    }
    return (
      <span>{removeButton}</span>
    )
  }
});

module.exports = Header;
