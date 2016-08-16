import {
  SET_EXPANDED_MARKERS,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state={250:null,500:null,750:null}, action) {
  switch(action.type) {
    case SET_EXPANDED_MARKERS:
      return action.payload;
    case RECEIVE_ROUTES_LYFT:
    case RECEIVE_ROUTES_UBER:
      return {250:null,500:null,750:null}
  }
  return state;
}
