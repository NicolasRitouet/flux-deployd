var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');



var _periods = [];


function _addPeriod(period) {
  console.log('Add period', period);
  _periods.push(period);
}

function _removePeriod(periodId) {
  console.log("Removing period", periodId, _periods);
  _periods.forEach(function(period, index) {
    if (period.id === periodId) {
      console.log(period, index);
      _periods.splice(index, 1);
    }
  });
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(AppConstants.CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(AppConstants.CHANGE_EVENT, callback);
  },
  removeChangeListener: function() {
    this.removeListener(AppConstants.CHANGE_EVENT);
  },
  getPeriods: function() {
    console.log('Returning periods', _periods);
    return _periods;
  },
  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
      case AppConstants.ActionTypes.ADD_PERIOD:
        _addPeriod(payload.action.period);
        break;
      case AppConstants.ActionTypes.REMOVE_PERIOD:
        _removePeriod(payload.action.index)
        break;
      case AppConstants.api.GET_PERIOD_DATA:
        if (payload.action.response !== AppConstants.request.PENDING) {
          console.log(payload);
          periods = payload.action.response.body;
          _periods = periods;
        }
        break;
      case AppConstants.api.ADD_PERIOD_DATA:
        if (payload.action.response !== AppConstants.request.PENDING) {
          periods = payload.action.response.body;
          _periods = periods;
        }
        break;

    }
    AppStore.emitChange();
    return true;
  })
});



module.exports = AppStore;
