
import {USERS_RECEIVED} from './actions';
import {CHANGE_COLORS} from './actions';

export default function users(state= [], action = {}) {
	switch (action.type){
		case USERS_RECEIVED:{
			console.log(action);
			//debugger;
			return action.users;
		}
		case CHANGE_COLORS:{
			//debugger;
			return action.users;
		}


		default:return state;
	}
}