import React from 'react'

import './index.css';
//console.log(s);
import util from './util';

import { Container, Grid } from 'semantic-ui-react'

import Table from './Table.js'


class TableContainer extends  React.Component {
	state = {tableUsers:[]};
	componentWillMount () {
		console.log(this.props);
		let user =  util.splitArray(this.props.users,4);
		this.setState({tableUsers:user});
	}

	render(){
		console.log(this);
		return (
			<Container>
				<Grid>
					<Grid.Row columns={3}>
						<Grid.Column>
							<Table userList={this.state.tableUsers[0]} />
						</Grid.Column>
						<Grid.Column>
							<Table userList={this.state.tableUsers[1]} />
						</Grid.Column>
						<Grid.Column>
							<Table userList={this.state.tableUsers[2]} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}



export default TableContainer
