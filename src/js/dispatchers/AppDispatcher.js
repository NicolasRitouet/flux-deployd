var Dispatcher = require('flux').Dispatcher;
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: AppConstants.ActionSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: AppConstants.ActionSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = AppDispatcher;
