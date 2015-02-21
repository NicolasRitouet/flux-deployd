var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');


var AppActions = {
  addPeriod: function(period) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.ADD_PERIOD,
      period: period
    });
  },
  removePeriod: function(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.REMOVE_PERIOD,
      index: index
    });
  }
}

module.exports = AppActions;
