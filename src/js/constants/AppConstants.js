var keyMirror = require('react/lib/keyMirror');

module.exports = {

  CHANGE_EVENT: 'change',

  ActionTypes: keyMirror({
    ADD_PERIOD: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),
  api: keyMirror({
    GET_PERIOD_DATA: null,
    POST_PERIOD_DATA: null,
    DELETE_PERIOD_DATA: null
  }),
  request: keyMirror({
    PENDING: null,
    ERROR: null,
    TIMEOUT: null
  })

};
