import React ,{Component} from 'react'

import './index.css';

import { Container, Grid, Input, Dropdown, Button } from 'semantic-ui-react'



//const resultRenderer = ({ title }) => <Label content={title} />

class NavBar extends  Component {
	constructor(){
		super();
		this.state = {totalUsers:[],selectionArray:[{text:'A'},{text:'B'},{text:'C'},{text:'D'}]};
		this.handleClick = this.handleClick.bind(this);
		this.handleLabelClick = this.handleLabelClick.bind(this);
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
	}
	handleChange = () => {
		console.log(this);
	}
	handleClick(e){
		console.log(e);
	}
	handleLabelClick(e, data){
		console.log(e);
		console.log(data);
	}

	render(){
		return (
			<Container>
				<Grid>
					<Grid.Row columns={2}>
						<Grid.Column>
							<Input ref={input => this.inputElement = input}  icon='search' placeholder='Search...' fluid={true}  onChange={this.handleChange} />
						</Grid.Column>
						<Grid.Column>
							<Dropdown placeholder='Teams' fluid multiple selection options={this.state.selectionArray} onLabelClick={this.handleLabelClick} />
						</Grid.Column>

					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}


export default NavBar
