var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var Api = require('../Api');


var AppActions = {
  addPeriod: function(period) {
    Api.addPeriod(period);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.ADD_PERIOD,
      period: period
    });
  },
  removePeriod: function(periodId) {
    Api.removePeriod(periodId);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.REMOVE_PERIOD,
      index: periodId
    });
  },
  getPeriodData: function(periodId) {
    Api.getPeriodData(periodId);
  },
  getPeriodsData: function() {
    Api.getPeriodsData();
  }
}

module.exports = AppActions;
