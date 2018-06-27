import React from 'react';
import Page from '../components/Page';
import { withRouter } from 'react-router-dom';


class AccountView extends React.Component {
  constructor(props) {
      super(props);
  };

	render() {
	  return (
	      <Page activeTab={3}>
	      	<p> Hello AccountView </p>
	      </Page>
	  );
  }
}
export default withRouter(AccountView);