import React from 'react';
import Page from '../components/Page';
import { withRouter } from 'react-router-dom';


class AboutView extends React.Component {
  constructor(props) {
      super(props);
  };

	render() {	
	  return (
	      <Page activeTab={1}>
	      	<p> Hello AboutView </p>
	      </Page>
	  );
  }
}
export default withRouter(AboutView);