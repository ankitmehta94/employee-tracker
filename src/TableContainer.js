import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './index.css';
import {switchEmp} from './actions'
//console.log(s);
import util from './util';

import { Container, Grid, Checkbox, Divider, Header } from 'semantic-ui-react'

import Table from './Table.js'


class TableContainer extends  React.Component {
	constructor(){
		super();
		this.state = {totalUsers:[],admin:false,switchArray:[],notification:null};
		this.handleChange = this.handleChange.bind(this);
		this.handleUserClick = this.handleUserClick.bind(this);
	}
	componentWillMount () {
		const { users } =  this.props;
		let y = JSON.parse(JSON.stringify(users));
		let x =  util.splitArray(y,4);
		this.setState({tableUsers:x});
	}
	handleUserClick = (data)=>{
		console.log(data);
		if(this.state.switchArray.length<3){
			let switchArray = this.state.switchArray;
			switchArray.push(data);
			if(switchArray.length===2){
				let x = switchArray.map((datum)=>{
					return datum.key;
				})
				this.props.switchEmp(this.props.users, x);
				let noti = switchArray[0].name + ' switched with ' + switchArray[1].name;
				console.log(noti);
				switchArray = [];
				this.setState({notification:noti});
				console.log(this.state.notification);
			}
			this.setState({switchArray:switchArray});
		}
	}
	componentDidUpdate(){
		console.log('yes', this.state.notification);
	}
	handleChange(e,data){
		this.setState({admin:data.checked});
	}
	componentWillReceiveProps(nextProps){
		const { users } =  nextProps;
		let y = JSON.parse(JSON.stringify(users));
		let x =  util.splitArray(y,4);
		this.setState({tableUsers:x});
	}
	showNotification(){
		if(this.state.admin && this.state.notification){
			console.log(this.state.admin);
			return (
				<Header as='h3' block>
					{this.state.notification}
				</Header>
			)
		}else{
			return <div></div>
		}
	}
	render(){
		return (
			<Container>
				<Grid>
					<Grid.Row columns={1}>
						<Grid.Column>
							<Checkbox label={'Switch On Project Manager Mode (Select Two Employess and they will switch places)'} onChange={this.handleChange} toggle />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={3}>
						<Grid.Column>
							<Table userList={this.state.tableUsers[0]} tableIndex={0} onClick={this.handleUserClick}  admin={this.state.admin} />
						</Grid.Column>
						<Grid.Column>
							<Table userList={this.state.tableUsers[1]} tableIndex={1} onClick={this.handleUserClick}  admin={this.state.admin} />
						</Grid.Column>
						<Grid.Column>
							<Table userList={this.state.tableUsers[2]} tableIndex={2} onClick={this.handleUserClick}  admin={this.state.admin} />
						</Grid.Column>
					</Grid.Row>
					<Divider/>
					<Grid.Row columns={3}>
						<Grid.Column>
							<Table userList={this.state.tableUsers[3]} tableIndex={3} onClick={this.handleUserClick.bind(this)}  admin={this.state.admin} />
						</Grid.Column>
						<Grid.Column>
							<Table userList={this.state.tableUsers[4]} tableIndex={4} onClick={this.handleUserClick.bind(this)}  admin={this.state.admin} />
						</Grid.Column>
						<Grid.Column>
							<Table userList={this.state.tableUsers[5]} tableIndex={5} onClick={this.handleUserClick.bind(this)}  admin={this.state.admin} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Divider/>
				{this.showNotification()}
			</Container>
		)
	}
}



function mapStateToProps(state,props) {
	return {
		users:state.users
	}
}
function matchDispatchToProps(dispatch) {
	return bindActionCreators({switchEmp:switchEmp}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(TableContainer)