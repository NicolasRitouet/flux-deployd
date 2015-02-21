var AppDispatcher = require('./dispatchers/AppDispatcher');
var AppConstants = require('./constants/AppConstants');

var request = require('superagent');


var API_URL = '/api/v2';
var TIMEOUT = 10000;

var _pendingRequests = {};


function abortPendingRequests(key) {
    if (_pendingRequests[key]) {
        _pendingRequests[key]._callback = function(){};
        _pendingRequests[key].abort();
        _pendingRequests[key] = null;
    }
}

function token() {
    return UserStore.getState().token;
}

function makeUrl(part) {
    return "http://localhost:2403" + part;
}

function dispatch(key, response, params) {
    var payload = {actionType: key, response: response};
    if (params) {
        payload.queryParams = params;
    }
    AppDispatcher.handleServerAction(payload);
}

// return successful response, else return request Constants
function makeDigestFun(key, params) {
    return function (err, res) {
        if (err && err.timeout === TIMEOUT) {
            dispatch(key, AppConstants.request.TIMEOUT, params);
        } else if (res.status === 400) {
            UserActions.logout();
        } else if (!res.ok) {
            dispatch(key, AppConstants.request.ERROR, params);
        } else {
            dispatch(key, res, params);
        }
    };
}

// a get request with an authtoken param
function get(url) {
    return request
        .get(url)
        .timeout(TIMEOUT)
        .query();
}

function post(url, params) {
  return request
    .post(url)
    .timeout(TIMEOUT)
    .send(params);
}

function del(url) {
  return request
    .del(url)
    .timeout(TIMEOUT);
}

var Api = {
    getPeriodData: function(periodId) {
        var url = makeUrl("/periods/" + periodId);
        var key = AppConstants.api.GET_PERIOD_DATA;
        var params = {id: periodId};
        abortPendingRequests(key);
        dispatch(key, AppConstants.request.PENDING, params);
        _pendingRequests[key] = get(url).end(
            makeDigestFun(key, params)
        );
    },

    getPeriodsData: function() {
        var url = makeUrl("/periods/");
        var key = AppConstants.api.GET_PERIOD_DATA;
        abortPendingRequests(key);
        dispatch(key, AppConstants.request.PENDING);
        _pendingRequests[key] = get(url).end(
            makeDigestFun(key)
        );
    },
    addPeriod: function(period) {

        var url = makeUrl("/periods/");
        var key = AppConstants.api.POST_PERIOD_DATA;
        abortPendingRequests(key);
        dispatch(key, AppConstants.request.PENDING);
        _pendingRequests[key] = post(url, period).end(
            makeDigestFun(key)
        );
    },
    removePeriod : function(periodId) {

        var url = makeUrl("/periods/" + periodId);
        var key = AppConstants.api.DELETE_PERIOD_DATA;
        abortPendingRequests(key);
        dispatch(key, AppConstants.request.PENDING);
        _pendingRequests[key] = del(url).end(
            makeDigestFun(key)
        );
    }
};

module.exports = Api;
