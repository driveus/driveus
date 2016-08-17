import {
  SET_SURGE,
  REQUEST_ROUTES,
  DISABLE_SURGE
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state=0, action) {
  switch(action.type) {
    case DISABLE_SURGE:
      return 0;
    case SET_SURGE:
      return state+=action.payload;

    case REQUEST_ROUTES:
      return 0;
  }
  return state;
}
