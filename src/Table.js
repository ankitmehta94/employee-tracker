import React from 'react'
import { Card, Container , Grid} from 'semantic-ui-react'

import './index.css';
//console.log(s);

import User from './User.js'


class Table extends  React.Component {
	constructor(){
		super();
		this.handleUserClick = this.handleUserClick.bind(this);
	}
	handleUserClick(data){
		(this.props.onClick.bind(this,data))();
	}
	createTable(){
		return (<Grid>
			<Grid.Row columns={2}>
				<Grid.Column>
					<User value={this.props.userList[0]} onClick={this.handleUserClick} />
				</Grid.Column>
				<Grid.Column>
					<User value={this.props.userList[1]} onClick={this.handleUserClick}/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row columns={1}>
				<Card raised header={'Table ' + (this.props.tableIndex+1)} className={'tableSize'}/>
			</Grid.Row>
			<Grid.Row columns={2}>
				<Grid.Column>
					<User value={this.props.userList[2]} onClick={this.handleUserClick}/>
				</Grid.Column>
				<Grid.Column>
					<User value={this.props.userList[3]} onClick={this.handleUserClick}/>
				</Grid.Column>
			</Grid.Row>
		</Grid>)
	}
	render(){
		console.log(this);
		return (
			<Container>
				{this.props.userList?this.createTable():''}
			</Container>
			)
	}
}
export default Table;