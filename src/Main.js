import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchusers} from './actions'

import { Loader, Divider } from 'semantic-ui-react'

import TableContainer from './TableContainer.js'
import NavBar from './NavBar.js'

class Main extends Component {
	state = {tableUsers:[],totalUsers:[]};
	componentWillMount () {
		console.log('componentWillMount');
		this.props.fetchUsers().then(()=>{
			let totalUsers = this.props.users;
			this.setState({totalUsers:totalUsers});
		});
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

function mapStateToProps(state) {
	return {
		users:state.users
	}
}
function matchDispatchToProps(dispatch) {
	return bindActionCreators({fetchUsers:fetchusers}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Main)
