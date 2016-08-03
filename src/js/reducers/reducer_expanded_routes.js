import {
  NO_EXPANDED_ROUTES,
  RECEIVE_EXPANDED_ROUTES
} from '../actions/types';

// Setting state to this default feels ghetto... probably a better way
export default function(state=[], action) {
  switch (action.type) {
    case NO_EXPANDED_ROUTES:
      console.log('No better deals found.')
      return [];

    case RECEIVE_EXPANDED_ROUTES:
      console.log('Received better deals!', action.routes)
      return action.routes;
  }
  return state;
}
