import UserList from './UserDB.js'





export  const USERS_RECEIVED = 'USERS_RECEIVED';


function dbCall(){
	return Promise.resolve(UserList);
}

export function fetchUsers() {
	console.log('fetchUsers');
	return dispatch => {
		return dbCall().then(res => {
			dispatch(usersReceived(res));
		})
	}
}
function usersReceived(users) {
	return {
		type:USERS_RECEIVED,
		users
	}
}