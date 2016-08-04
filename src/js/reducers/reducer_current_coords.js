import {
  RECEIVE_ROUTES_LYFT,
  RECEIVE_ROUTES_UBER
} from '../actions/types';

export default function (state={start:null,end:null}, action) {

  switch (action.type) {
    case RECEIVE_ROUTES_UBER:
    case RECEIVE_ROUTES_LYFT:
    console.log('Saving current location as', action.coords);
      return action.coords;
  }
  return state;
}
