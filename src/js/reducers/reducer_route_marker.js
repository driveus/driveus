import {
  SET_MARKERS,
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state={start:null,end:null}, action) {
  switch(action.type) {
    case SET_MARKERS:
      return action.payload;
  }
  return state;
}
