/** @jsx React.DOM */

var React = require('react');
var PeriodActions = require('../actions/PeriodActions');
var Header = require('./Header');
var Sidebar = require('./Sidebar');
var ListPeriods = require('./ListPeriods');
var AddPeriod = require('./AddPeriod');
var Footer = require('./Footer');

var APP = React.createClass({

  handleClick: function() {
    PeriodActions.addPeriod(this.props.period);
  },
  render: function() {
    return (
      <div>
        <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3">
                <Sidebar />
            </div>
            <div className="col-sm-9">
              <h4>Name of page</h4>
              <ListPeriods />
              <AddPeriod />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
});
module.exports = APP;
