import React from 'react';
import Page from '../components/Page';
import { Toolbar, Button, Tabs, Tab, TabsContainer, Paper } from 'react-md';
import { withRouter } from 'react-router-dom'
import UserService from '../services/UserService';

class AboutView extends React.Component {
  constructor(props) {
      super(props);
  };

	render() {	
		let tab;
		UserService.isAuthenticated() ? tab=2 : tab=1;
	  return (
	      <Page activeTab={tab}>
				<Paper style={{display: 'block', margin: 'auto', marginTop: '30px', marginBottom: '20px', width: '360px', padding: '10px',fontFamily: 'Encode Sans'}}>
	      	<p> FitBox is a meal delivery service for people who want to live a healthy life style without thinking about what to cook.
						With the variety of items we have on our menu, we offer you a way to save time and still stay healthy!
						Just pick your meals from our menu for your weekly order, get your meals delivered to your address cooked and ready to eat.
						It is as simple as that!
						You can also talk to our dietitians and personal trainers to consult on the weekly menu you prefer.
						You don't need to think about what to eat, what to buy or how to prepare your meal. You only need FitBox!
						 
							</p>
							</Paper>
							<Button style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}flat primary swapTheming onClick={() => this.props.history.push('/menu')} >Start eating healthy now!</Button>
	      </Page>
	  );
  }
}
export default withRouter(AboutView);