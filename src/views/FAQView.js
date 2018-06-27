import React from 'react';
import Page from '../components/Page';
import { withRouter } from 'react-router-dom';


class FAQView extends React.Component {
  constructor(props) {
      super(props);
  };

	render() {	
	  return (
	      <Page activeTab={2}>
	      	<p> Hello FAQView </p>
	      </Page>
	  );
  }
}
export default withRouter(FAQView);