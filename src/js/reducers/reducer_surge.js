import {
  SET_SURGE,
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state=false, action) {
  switch(action.type) {
    case SET_SURGE:
      // return action.payload;
      return true;
  }
  return state;
}
