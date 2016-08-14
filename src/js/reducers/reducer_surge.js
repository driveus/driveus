import {
  SET_SURGE,
  REQUEST_ROUTES,
  DISABLE_SURGE
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state=false, action) {
  switch(action.type) {
    case DISABLE_SURGE:
      return false;
    case SET_SURGE:
      if (state) {
        return true;
      }
      return action.payload;

    case REQUEST_ROUTES:
      return false;
  }
  return state;
}
