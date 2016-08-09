import {
	LOADING_CAR
} from '../actions/types';


export default function (state = false, action) {
 	switch(action.type) {
 		case LOADING_CAR:
 			console.log('Better deals are loading!!!!!!!!!!!');
 			return action.payload;
 	}
 	return state;

}

