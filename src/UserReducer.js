
import {USERS_RECEIVED} from './actions';

export default function users(state= [], action = {}) {
	switch (action.type){
		case USERS_RECEIVED:{
			return action.users;
		}


		default:return state;
	}
}