import {
  SET_WALKING_TIME,
} from '../actions/types';

export default function (state=null, action) {
  switch (action.type) {
    case SET_WALKING_TIME:
      return action.payload;
  }
  return state;
}
