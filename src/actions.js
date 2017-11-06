import UserList from './UserDB.js'





export  const USERS_RECEIVED = 'USERS_RECEIVED';
export  const CHANGE_COLORS = 'CHANGE_COLORS';


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
export function changeColor(users,array) {
	console.log(UserList)
	let newUsers = UserList.map((user)=>{
		if(array.indexOf(user.key)!==-1){
			user.color = "blue";
		}else{
			user.color = "black";
		}
		return user
	});
	console.log(newUsers);
	return dispatch => {
			dispatch(colorChanged(newUsers));
	}
}
function usersReceived(users) {
	return {
		type:USERS_RECEIVED,
		users
	}
}
function colorChanged(users) {
	return {
		type:CHANGE_COLORS,
		users
	}
}