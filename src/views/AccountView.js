import React from 'react';
import Page from '../components/Page';
import MyProfile from '../components/MyProfile';
import MyAdress from '../components/MyAdress';
import { withRouter } from 'react-router-dom';
import { List, ListItem, CardTitle, Media, MediaOverlay, Grid, Cell } from 'react-md';


class AccountView extends React.Component {
  constructor(props) {
	  super(props);
		this.state = {
			title : 'FitBox - My Account',
         	indexOfClickedItem: -1
        };
		document.title = this.state.title;
    	this.onListItemClicked = this.onListItemClicked.bind(this);
    	this.mainContent = <MyProfile />;  //this
  };

    onListItemClicked(index) {
        this.setState({
            indexOfClickedItem: index
		});
		
		let data = "none";
	  if(index == 0){
		data = <MyProfile />
	  }else{
		data=<MyAdress />
	  }

	  this.mainContent = <p>{data}</p>;
    }


	render() {	
	  return (
		<Page>
			<Grid>
      			<Cell size={2}>
					<p> Hello Muharrem </p>
					<img src="https://pbs.twimg.com/profile_images/996353371543138304/zo1w3vGs_400x400.jpg" 
					style={{width: 300, height: 300}}/>
					<List >
      					<ListItem primaryText="My Profile" onClick= {() => this.onListItemClicked(0)}/>
      					<ListItem primaryText="My Adresses" onClick={() => this.onListItemClicked(1)}/>
    				</List>
				</Cell>
      			<Cell size={6} style={{margin: 30}}>
  					{this.mainContent} 
				</Cell>
    		</Grid>
		</Page>

	  );
  }
}
export default withRouter(AccountView);