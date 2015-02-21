var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');



var _periods = [
  {
    name: "Second semestre 2015",
    start: "2015-01-01",
    end: "2015-06-30"
  }
];


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
        console.log('Dispatcher index:', payload.action.period);
        _addPeriod(payload.action.period);
        break;
    }
    AppStore.emitChange();
    return true;
  })
});





function _addPeriod(period) {
  console.log('Add period', period);
  _periods.push(period);
}


module.exports = AppStore;
