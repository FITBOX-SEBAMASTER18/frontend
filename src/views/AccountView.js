import React from 'react';
import Page from '../components/Page';
import { withRouter } from 'react-router-dom';


class AccountView extends React.Component {
  constructor(props) {
      super(props);
  };

	render() {
    console.log("MealsView");		
	  return (
	      <Page>
	      	<p> Hello AccountView </p>
	      </Page>
	  );
  }
}
export default withRouter(AccountView);