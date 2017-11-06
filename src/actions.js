import UserList from './UserDB.js'





export  const USERS_RECEIVED = 'USERS_RECEIVED';
export  const CHANGE_COLORS = 'CHANGE_COLORS';
export  const REORDER_USERS = 'REORDER_USERS';


function dbCall(){
	return Promise.resolve(UserList);
}

function getIndexByKey(array,s) {
	let x = [];
	array.forEach(function(datum, index){
		if(s.indexOf(datum.key)!=-1){
			x.push(index)
		}
	})
	return x;
}
export function fetchUsers() {
	return dispatch => {
		return dbCall().then(res => {
			dispatch(usersReceived(res));
		})
	}
}
export function switchEmp(users, array) {
	let indexArray = getIndexByKey(users,array);
	let f = indexArray[0];
	let s = indexArray[1];
	let temp = JSON.parse(JSON.stringify(users[f]));
	users[f] = users[s];
	users[s] = temp;
	console.log(users);
	users = users.map((user)=>{
		user.color = "black";
		return user;
	});
	return dispatch => {
			dispatch(usersSwitched(users));
	}
}
export function changeColor(users,array) {
	let newUsers = UserList.map((user)=>{
		if(array.indexOf(user.key)!==-1){
			user.color = "blue";
		}else{
			user.color = "black";
		}
		return user
	});
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
function usersSwitched(users) {
	return {
		type:REORDER_USERS,
		users
	}
}