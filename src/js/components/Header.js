/** @jsx React.DOM */

var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div id="top-nav" className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Libre Class</a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">

              <li className="dropdown">
                <a className="dropdown-toggle" role="button" data-toggle="dropdown" href="#"><i className="glyphicon glyphicon-user"></i> Admin <span className="caret"></span></a>
                <ul id="g-account-menu" className="dropdown-menu" role="menu">
                  <li><a href="#">My Profile</a></li>
                </ul>
              </li>
              <li><a href="#"><i className="glyphicon glyphicon-lock"></i> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Header;
