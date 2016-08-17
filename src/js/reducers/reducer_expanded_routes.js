import {
  NO_EXPANDED_ROUTES,
  REQUEST_ROUTES,
  REQUEST_EXPANDED_ROUTES,
  RECEIVE_EXPANDED_ROUTES,
  RECEIVE_ROUTES_LYFT,
  RECEIVE_ROUTES_UBER
} from '../actions/types';

// Setting state to this default feels ghetto... probably a better way
export default function(state={routes:{close:null,medium:null,far:null},message:null,received:false,success:false}, action) {
  switch (action.type) {
    case NO_EXPANDED_ROUTES:
      return Object.assign({}, state, {
        message: null,
        success: false
      });
    case REQUEST_ROUTES:
      return {
        routes: {close:null,medium:null,far:null},
        message: null,
        received: false,
        success: true
      }
    case REQUEST_EXPANDED_ROUTES:
      return Object.assign({}, state, {
        message: 'Searching for better routes...'
      });
    case RECEIVE_EXPANDED_ROUTES:
      if (state.received) {
        return state;
      }
      return Object.assign({}, state, {
        routes: action.routes,
        message: null,
        received: true
      });
    }
  return state;
}
