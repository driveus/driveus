import {
  SET_MARKERS,
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state=[], action) {
  switch(action.type) {
    case SET_MARKERS:
      console.log('New markers have been generated');
      return action.payload;
  }
  return state;
}
