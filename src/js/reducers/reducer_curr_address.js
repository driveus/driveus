import {
	CURRENT_ADDRESS
} from '../actions/types';

export default function(state={start:null, end:null}, action) {
	switch(action.type) {
		case CURRENT_ADDRESS:
		console.log('got the current address', action.address);
		return action.address;
	}	
	return state;
}