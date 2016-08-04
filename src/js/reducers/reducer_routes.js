import {
  REQUEST_ROUTES,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT,
  INVALID_ROUTES_UBER,
} from '../actions/types';

export default function(state={uber:[],lyft:[]}, action) {
  switch (action.type) {
    case INVALID_ROUTES_UBER:
      console.log('Invalid route!')
      return state;

    case REQUEST_ROUTES:
      console.log('Requesting routes...')
      return {
        uber: [],
        lyft: []
      };
    case RECEIVE_ROUTES_UBER:
      console.log('Received Uber routes!', action.routes)
      return Object.assign({}, state, {
        uber: action.routes
      });
    case RECEIVE_ROUTES_LYFT:
      console.log('Received Lyft routes!', action.routes)
      return Object.assign({}, state, {
        lyft: action.routes
      });
  }
  return state;
}
