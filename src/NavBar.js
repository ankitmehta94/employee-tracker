import React ,{Component} from 'react'

import './index.css';

import { Container, Grid, Label, Input, Button, Dropdown } from 'semantic-ui-react'



const resultRenderer = ({ title }) => <Label content={title} />

class NavBar extends  Component {
	state = {totalUsers:[]}
	componentWillMount () {
		let totalUsers = this.props.users;
		totalUsers.forEach(user=>{
			user.user_present = user.user_present.toString();
		})
		this.setState({totalUsers:totalUsers},()=>{
			console.log(this.state);
		});
		console.log(this.props.users);
		console.log(this.state);
		console.log(totalUsers);
	}
	handleChange = () => {
		console.log(this);
	}


	render(){
		return (
			<Container>
				<Grid>
					<Grid.Row columns={2}>
						<Grid.Column>
							<Input ref={input => this.inputElement = input}  icon='search' placeholder='Search...'  onChange={this.handleChange} />
						</Grid.Column>
						<Grid.Column>
							<Dropdown placeholder='Skills' fluid multiple selection options={this.state.totalUsers} />
						</Grid.Column>

					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}


export default NavBar
