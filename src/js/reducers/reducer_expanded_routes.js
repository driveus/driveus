import {
  NO_EXPANDED_ROUTES,
  REQUEST_ROUTES,
  REQUEST_EXPANDED_ROUTES,
  RECEIVE_EXPANDED_ROUTES,
  RECEIVE_ROUTES_LYFT,
  RECEIVE_ROUTES_UBER
} from '../actions/types';

// Setting state to this default feels ghetto... probably a better way
export default function(state={routes:{250:null,500:null,750:null},message:null,received:false}, action) {
  switch (action.type) {
    case NO_EXPANDED_ROUTES:
      return Object.assign({}, state, {
        message: 'no better deals, yo'
      });
    case REQUEST_ROUTES:
      return {
        routes: {250:null,500:null,750:null},
        message: null,
        received: false
      }
    case REQUEST_EXPANDED_ROUTES:
      return Object.assign({}, state, {
        message: 'Searching for better routes.'
      });
    case RECEIVE_EXPANDED_ROUTES:
      if (state.received) {
        return state;
      }
      return Object.assign({}, state, {
        routes: action.routes,
        message: 'found some stuff dude',
        received: true
      });
    // case RECEIVE_ROUTES_LYFT:
    // case RECEIVE_ROUTES_UBER:
    //   return Object.assign({}, state, {
    //     routes: {250:null,500:null,750:null}
    //   });
    }
  return state;
}
