import {
  REQUEST_ROUTES,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT,
  INVALID_ROUTES_UBER,
} from '../actions/types';

export default function(state={uber:[],lyft:[]}, action) {
  switch (action.type) {
    case INVALID_ROUTES_UBER:
      return state;

    case REQUEST_ROUTES:
      return {
        uber: [],
        lyft: []
      };
    case RECEIVE_ROUTES_UBER:
      return Object.assign({}, state, {
        uber: action.routes
      });
    case RECEIVE_ROUTES_LYFT:
      return Object.assign({}, state, {
        lyft: action.routes
      });
  }
  return state;
}
