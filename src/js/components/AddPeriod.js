/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/AppActions');

var AddPeriod = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      start: '',
      end: ''
    };
  },
  handleClick: function() {
    AppActions.addPeriod(this.state);
  },
  handleNameChange: function(event) {
    console.log(event);
    this.setState({
      name: event.target.value
    });
  },
  handleStartChange: function(event) {
    console.log(event);
    this.setState({
      start: event.target.value
    });
  },
  handleEndChange: function(event) {
    console.log(event);
    this.setState({
      end: event.target.value
    });
  },
  render: function() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name of period" value={this.state.name} onChange={this.handleNameChange} />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="start">Start</label>
          <input type="text" className="form-control" id="start" placeholder="Start of period" value={this.state.start} onChange={this.handleStartChange} />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="end">End</label>
          <input type="text" className="form-control" id="end" placeholder="End of period" value={this.state.end} onChange={this.handleEndChange} />
        </div>
        <div className="form-group">
          <button onClick={this.handleClick} className="btn btn-default">Add period</button>
        </div>
      </form>
    )
  }
});
module.exports = AddPeriod;
