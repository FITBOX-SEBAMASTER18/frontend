import React from 'react';
import Page from '../components/Page';
import { withRouter } from 'react-router-dom';
import UserService from '../services/UserService';

class FAQView extends React.Component {
  constructor(props) {
      super(props);
  };

	render() {
		let tab;
		UserService.isAuthenticated() ? tab=3 : tab=2 ;

	  return (
	      <Page activeTab={tab}>
	      	<p><b>What is FitBox? </b></p>
					<p>FitBox is a meal delivery service for people who want to live a healthy life style without thinking about what to cook. We deliver cooked meals right to your home that you can instantly eat or put into the freezer.</p>
					<p><b>How often do I need to order?</b></p>
					<p>Orders are weekly as our menus get updated weekly.</p>
					<p><b>Who can I consult to about my eating schedule?</b></p>
					<p>We offer the possibility to consult to our licensed dietitians and personal trainers so you can discuss your selections.</p>
					<p><b>Can I customize my menu?</b></p>
					<p>You can customize your weekly order from our menu anyway you want.</p>
	      </Page>
	  );
  }
}
export default withRouter(FAQView);