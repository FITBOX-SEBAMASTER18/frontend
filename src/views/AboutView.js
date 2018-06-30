import React from 'react';
import Page from '../components/Page';
import { Toolbar, Button, Tabs, Tab, TabsContainer } from 'react-md';
import { withRouter } from 'react-router-dom'

class AboutView extends React.Component {
  constructor(props) {
      super(props);
  };

	render() {	
	  return (
	      <Page activeTab={2}>
	      	<p> FitBox is a meal delivery service for people who want to live a healthy life style without thinking about what to cook.
						With the variety of items we have on our menu, we offer you a way to save time and still stay healthy!
						Just pick your meals from our menu for your weekly order, get your meals delivered to your address cooked and ready to eat.
						It is as simple as that!
						You can also talk to our dietitians and personal trainers to consult on the weekly menu you prefer.
						You don't need to think about what to eat, what to buy or how to prepare your meal. You only need FitBox!
						 
							</p>
							<Button flat primary swapTheming onClick={() => this.props.history.push('/meals')} >Start eating healthy now!</Button>
	      </Page>
	  );
  }
}
export default withRouter(AboutView);