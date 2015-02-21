/** @jsx React.DOM */

var React = require('react');
var PeriodStore = require('../stores/PeriodStore');

function getPeriods() {
  return {
    periods: PeriodStore.getPeriods()
  }
}

var ListPeriod = React.createClass({

  getInitialState: function() {
    return getPeriods();
  },
  componentWillMount: function() {
    PeriodStore.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(getPeriods());
  },
  render: function() {
    var periods = this.state.periods.map(function(period) {
      return <tr><td>{period.name}</td><td>{period.start}</td><td>{period.end}</td></tr>
    })
    return (
      <table className="table table-hover">
        {periods}
      </table>
    )
  }
});

module.exports = ListPeriod;
