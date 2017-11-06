import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'
import './index.css';
//console.log(s);
class User extends  React.Component {

	constructor(){
		super();
		this.state = { user:{user_present:true, sex:'male', name:'Ankit Mehta', job:'Frontend Developer', team:'Frontend' ,position:0, color:"black"},
			openPop:true
		};
		console.log(this);
	}
	componentDidMount(){
		this.setState({user:this.props.value});
	}
	showIcon(){
		return <Icon ref={ico => this.icoElement = ico} name={this.state.user.user_present?this.state.user.sex:'circle outline'} color={this.state.user.color} size={'huge'} />
	}
	componentDidUpdate(){
		//console.log(this.props);

	}
	componentWillReceiveProps(nextProps){
	console.log(nextProps);
	this.setState({user:nextProps.value});
	}
	showPopup(){
	if(this.state.user.user_present){
		return(
			<Popup position={'top center'} on={['hover','click']} trigger={this.showIcon()}>
				<Popup.Header>{this.state.user.name}</Popup.Header>
				<Popup.Content>
					{this.state.user.job}
				</Popup.Content>
			</Popup>
		)
	}else{
		return <Icon  name={'circle outline'} color={'black'} size={'huge'} />
	}


	}
	render(){
		//console.log(this.props);
		return (
			<div className="inline-grid" >
				{this.showPopup()}
			</div>
			)
	}
}
export default User;