import React from 'react';
import { withRouter } from 'react-router-dom'
import { Toolbar, Button, Tabs, Tab, TabsContainer } from 'react-md';

class HeaderTabs extends React.Component {

  constructor(props) {
      super(props);
  }

	render(){
		return (
			<div className="header-buttons">
		      <Tabs
      			tabId="header-tabs"
	          onTabChange={this.handleTabChange}
	          style={ {margin: "auto"}}
		      >
		          	<Tab label="Meals" onClick={() => this.props.history.push('/meals')}>
		            </Tab>
		            <Tab label="About" onClick={() => this.props.history.push('/about')}>
		            </Tab>		            
		            <Tab label="F.A.Q." onClick={() => this.props.history.push('/faq')}>
		            </Tab>
		            <Tab label="My Account" onClick={() => this.props.history.push('/account')}>
		            </Tab>
		      </Tabs>
		  </div>
	  );
	}

};
export default withRouter(HeaderTabs);