import {
  SET_EXPANDED_CIRCLE,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state=null, action) {
  switch(action.type) {
    case SET_EXPANDED_CIRCLE:
      return action.payload;
    case RECEIVE_ROUTES_LYFT:
    case RECEIVE_ROUTES_UBER:
      return null
  }
  return state;
}
