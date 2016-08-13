import {
  SET_DIRECTIONS,
} from '../actions/types';

export default function (state=null, action) {
  switch (action.type) {
    case SET_DIRECTIONS:
      return action.payload;
  }
  return state;
}
