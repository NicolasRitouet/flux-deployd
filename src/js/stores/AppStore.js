var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var assign = require('react/lib/object-assign');



var _periods = [];


function _addPeriod(period) {
  _periods.push(period);
}


var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },
  removeChangeListener: function() {
    this.removeListener(Constants.CHANGE_EVENT);
  },
  getPeriods: function() {
    return _periods;
  },
  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
      case AppConstants.ADD_PERIOD:
        _addPeriod(payload.action.period);
        break;
    }
    AppStore.emitChange();
    return true;
  })
});
module.exports = AppStore;
