import React from 'react'

import './index.css';
//console.log(s);
import util from './util';

import { Container, Grid, Checkbox } from 'semantic-ui-react'

import Table from './Table.js'


class TableContainer extends  React.Component {
	constructor(){
		super();
		this.state = {totalUsers:[],admin:false};
		console.log(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillMount () {
		console.log(this.props);
		const { users } =  this.props;
		//debugger
		let y = JSON.parse(JSON.stringify(users));
		let x =  util.splitArray(y,4);
		//debugger;
		this.setState({tableUsers:x});
	}
	handleChange(e,data){
		console.log(e)
		console.log(data);
		this.setState({admin:data.checked});
	}
	render(){
		console.log(this);
		return (
			<Container>
				<Grid>
					<Grid.Row columns={1}>
						<Grid.Column>
							<Checkbox label={'Switch On Admin Mode'} onChange={this.handleChange} toggle />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={3}>
						<Grid.Column>
							<Table userList={this.state.tableUsers[0]} tableIndex={0}  admin={this.state.admin} />
						</Grid.Column>
						<Grid.Column>
							<Table userList={this.state.tableUsers[1]} tableIndex={1}  admin={this.state.admin} />
						</Grid.Column>
						<Grid.Column>
							<Table userList={this.state.tableUsers[2]} tableIndex={2}  admin={this.state.admin} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}



export default TableContainer
