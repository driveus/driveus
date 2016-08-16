import {
  SET_EXPANDED_CIRCLE,
  REQUEST_ROUTES
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state={close:null,medium:null,far:null}, action) {
  switch(action.type) {
    case SET_EXPANDED_CIRCLE:
      return action.payload;
    case REQUEST_ROUTES:
      return {close:null,medium:null,far:null}
  }
  return state;
}
