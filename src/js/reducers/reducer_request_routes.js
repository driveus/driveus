import {
  REQUEST_ROUTES,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state=true, action) {
  switch(action.type) {
    case REQUEST_ROUTES:
      return false;
    case RECEIVE_ROUTES_LYFT:
    case RECEIVE_ROUTES_UBER:
      return true;
  }
  return state;
}
