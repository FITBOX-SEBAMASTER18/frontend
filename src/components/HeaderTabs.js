import React from 'react';
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
		          <Tab label="Tab one">
		              <h3>Hello, World!</h3>
		            </Tab>
		            <Tab label="Tab two">
		              <h3>Now look at me!</h3>
		            </Tab>
		      </Tabs>
		  </div>
	  );
	}

};
export default HeaderTabs;