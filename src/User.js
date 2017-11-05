import React from 'react'
import {connect} from 'react-redux';
import { Icon, Label, Popup } from 'semantic-ui-react'
import classnames from 'classnames'
import './index.css';
//console.log(s);
class User extends  React.Component {
	state = { user:{user_present:true, sex:'male', name:'Ankit Mehta', job:'Frontend Developer', team:'Frontend' ,position:0},
		openPop:true
    };
	positionToClassName(p) {
		switch (p){
			case 0:{
				return 'firstUser'
			}
			case 1:{
				return 'secondUser'
			}
		}
		}
	componentDidMount(){
		this.setState({user:this.props.value});
	}
	showIcon(){
		return <Icon ref={ico => this.icoElement = ico} name={this.state.user.user_present?this.state.user.sex:'circle outline'} size={'huge'} />
	}
	showPopup(){

		return(
			<Popup position={'top center'} on={['hover','click']} trigger={this.showIcon()}>
				<Popup.Header>{this.state.user.name}</Popup.Header>
				<Popup.Content>
					{this.state.user.job}
				</Popup.Content>
			</Popup>

		)
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