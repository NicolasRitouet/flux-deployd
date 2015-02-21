/** @jsx React.DOM */

var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer>
        <div className="container">
          <p className="text-muted">Made by <a href="http://nicolas.ritouet.com">Nicolas Ritouet</a></p>
        </div>
      </footer>
    )
  }
});

module.exports = Footer;
