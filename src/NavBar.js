import React ,{Component} from 'react'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './index.css';

import {changeColor} from './actions'

import { Container, Grid, Input, Dropdown, Button } from 'semantic-ui-react'



//const resultRenderer = ({ title }) => <Label content={title} />

class NavBar extends  Component {
	constructor(){
		super();
		this.state = {totalUsers:[],selectionArray:[{text:'A',value:'A'},{text:'B',value:'B'},{text:'C',value:'C'},{text:'D',value:'D'}],selectionName:[],selectionJob:[]};
		this.handleTeamChange = this.handleTeamChange.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleJobChange = this.handleJobChange.bind(this);
	}
	componentDidMount () {
		const {users} = this.props;
		// users.forEach(user=>{
		// 	user.user_present = user.user_present.toString();
		// })
		this.setState({totalUsers:users},()=>{
			console.log(this.state);
		});
		console.log(this.props.users);
		console.log(this.state);
		console.log(users);
		let selectionName = [];
		let selectionJob = [];
		users.forEach((user)=>{
			if(user.user_present){
				selectionName.push({text: user.name,value:user.key});
				selectionJob.push({text: user.job,value:user.key});
			}
		});
		this.setState({selectionName:selectionName,selectionJob:selectionJob},()=>{
			console.log(this.state);
		});
	}
	handleSearchChange(e, data){
		console.log(e);
		console.log(data);
		let valueArray = [data.value];
		this.props.changeColor(this.state.totalUsers, valueArray);

	}
	handleJobChange(e,data){
		let valueArray = data.value;
		this.props.changeColor(this.state.totalUsers, valueArray);
	}
	handleTeamChange(e, data){
		console.log(e);
		console.log(data);
		let valueArray = [];
		this.state.totalUsers.forEach((user)=>{
			if(data.value.indexOf(user.team)!==-1){
				valueArray.push(user.key);
			}
		})
		console.log(valueArray);
		this.props.changeColor(this.state.totalUsers, valueArray);
	}

	render(){
		return (
			<Container>
				<Grid>
					<Grid.Row columns={3}>
						<Grid.Column verticalAlign={'middle'} width={6}>
							<Dropdown placeholder='Employees' search fluid selection options={this.state.selectionName} onChange={this.handleSearchChange} />
						</Grid.Column>
						<Grid.Column verticalAlign={'middle'} width={3}>
							<Dropdown placeholder='Teams'  multiple selection options={this.state.selectionArray} onChange={this.handleTeamChange} />
						</Grid.Column>
						<Grid.Column verticalAlign={'middle'} width={6}>
							<Dropdown placeholder='Jobs'  multiple fluid selection options={this.state.selectionJob} onChange={this.handleJobChange} />
						</Grid.Column>

					</Grid.Row>
				</Grid>
			</Container>
		)
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
	return bindActionCreators({changeColor:changeColor}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(NavBar)
