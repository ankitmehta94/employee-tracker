import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchUsers} from './actions'

import { Loader, Divider } from 'semantic-ui-react'

import TableContainer from './TableContainer.js'
import NavBar from './NavBar.js'

class Main extends Component {
	constructor(){
		super();
		this.state = {tableUsers:[],totalUsers:[]};
		console.log(this);
	}
	// state = {tableUsers:[],totalUsers:[]};
	componentDidMount () {
		console.log('componentDidMount');
		this.props.fetchUsers().then(()=>{
			let totalUsers = this.props.users;
			this.setState({totalUsers:totalUsers});
		});
	}
	componentDidUpdate(){
		console.log('componentDidUpdate');
	}
	render() {
		if(this.state.totalUsers.length>0){
			return (
				<div>
					<NavBar users={this.state.totalUsers}/>
					<Divider/>
					<TableContainer users={this.state.totalUsers}/>
				</div>
			)
		}else{
			return (
				<Loader active inline='centered' />
			)
		}
	}

}

function mapStateToProps(state,props) {
	console.log(state);
	//debugger;
	console.log(props);
	return {
		users:state.users
	}
}
function matchDispatchToProps(dispatch) {
	return bindActionCreators({fetchUsers:fetchUsers}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Main)
