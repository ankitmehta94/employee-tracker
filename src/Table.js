import React from 'react'
import { Card, Container , Grid} from 'semantic-ui-react'

import './index.css';
//console.log(s);

import User from './User.js'


class Table extends  React.Component {
	createTable(){
		return (<Grid>
			<Grid.Row columns={2}>
				<Grid.Column>
					<User value={this.props.userList[0]}/>
				</Grid.Column>
				<Grid.Column>
					<User value={this.props.userList[1]}/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row columns={1}>
				<Card raised header={'Table ' + (this.props.tableIndex+1)} className={'tableSize'}/>
			</Grid.Row>
			<Grid.Row columns={2}>
				<Grid.Column>
					<User value={this.props.userList[2]}/>
				</Grid.Column>
				<Grid.Column>
					<User value={this.props.userList[3]}/>
				</Grid.Column>
			</Grid.Row>
		</Grid>)
	}
	render(){
		console.log(this.props);
		return (
			<Container>
				{this.props.userList?this.createTable():''}
			</Container>
			)
	}
}
export default Table;