import {
  SET_EXPANDED_MARKERS,
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state={price:null,time:null}, action) {
  switch(action.type) {
    case SET_EXPANDED_MARKERS:
      console.log('Expanded makers have been generated');
      return action.payload;
  }
  return state;
}
