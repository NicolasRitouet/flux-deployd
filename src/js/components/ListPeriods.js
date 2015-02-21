/** @jsx React.DOM */

var React = require('react');
var PeriodStore = require('../stores/PeriodStore');
var PeriodActions = require('../actions/PeriodActions');
var RemovePeriod = require('./RemovePeriod');

function getPeriods() {
  return {
    periods: PeriodStore.getPeriods()
  }
}

var ListPeriod = React.createClass({

  getInitialState: function() {
    return getPeriods();
  },
  componentDidMount: function() {
    PeriodStore.addChangeListener(this._onChange);
    PeriodActions.getPeriodsData();
  },
  _onChange: function() {
    this.setState(getPeriods());
  },
  render: function() {
    var periods = this.state.periods.map(function(period) {
      return <tr><td>{period.name}</td><td>{period.start}</td><td>{period.end}</td><td><RemovePeriod index={period.id} /></td></tr>
    })
    return (
      <table className="table table-hover">
        {periods}
      </table>
    )
  }
});

module.exports = ListPeriod;
