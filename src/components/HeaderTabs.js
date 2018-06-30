import React from 'react';
import { withRouter } from 'react-router-dom'
import { Toolbar, Button, Tabs, Tab, TabsContainer } from 'react-md';

class HeaderTabs extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
      	activeTabIndex: 1
      }
      this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(newTabIndex, evt){
  	console.log("Changed tab to:" + newTabIndex);
  };

	render(){
		return (
			<div className="header-buttons">
		      <Tabs
      			tabId="header-tabs"
	          onTabChange={this.handleTabChange}
	          style={ {marginTop: "14px"}}
          	activeTabIndex={this.props.activeTab}
          	onTabChange={this.handleTabChange}
		      >
		      	<Tab label="Home" onClick={() => this.props.history.push('/')}>
            </Tab>
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