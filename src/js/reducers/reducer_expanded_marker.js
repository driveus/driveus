import {
  SET_EXPANDED_MARKERS,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state={close:null,medium:null,far:null}, action) {
  switch(action.type) {
    case SET_EXPANDED_MARKERS:
      return action.payload;
    case RECEIVE_ROUTES_LYFT:
    case RECEIVE_ROUTES_UBER:
      return {close:null,medium:null,far:null}
  }
  return state;
}
