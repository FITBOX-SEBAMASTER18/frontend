import React from 'react';
import { withRouter } from 'react-router-dom'
import { Toolbar, Button, Tabs, Tab, TabsContainer } from 'react-md';
import UserService from '../services/UserService';

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
		let fontStyle = { "font-size":"20px" };
		return (
			<div className="header-buttons">
		      <Tabs
      			tabId="header-tabs"
	          onTabChange={this.handleTabChange}
	          style={ {"marginTop": "16px"}}
          	activeTabIndex={this.props.activeTab}
          	onTabChange={this.handleTabChange}
		      >
		      	<Tab label="Home" style = {fontStyle} onClick={() => this.props.history.push('/')}>
            </Tab>
            {UserService.isAuthenticated() ? 
	        		(<Tab label="Meals" style = {fontStyle} onClick={() => this.props.history.push('/meals')}>
	          	</Tab>) : (null)}
	          <Tab label="About" style = {fontStyle} onClick={() => this.props.history.push('/about')}>
	          </Tab>		            
	          <Tab label="F.A.Q." style = {fontStyle} onClick={() => this.props.history.push('/faq')}>
	          </Tab>
	          {UserService.isAuthenticated() ? 
	          	(<Tab label="My Account" style = {fontStyle} onClick={() => this.props.history.push('/account')}>
	          	</Tab>) : (null) }
		      </Tabs>
		  </div>
	  );
	}

};
export default withRouter(HeaderTabs);