import React from 'react';
import Page from '../components/Page';
import MyProfile from '../components/MyProfile';
import MyAdress from '../components/MyAdress';
import { withRouter } from 'react-router-dom';
import { List, ListItem, CardTitle, Media, MediaOverlay, Grid, Cell } from 'react-md';
import UserService from '../services/UserService';
import { LoadingOverlay, Loader } from 'react-overlay-loader';

import 'react-overlay-loader/styles.css';

class AccountView extends React.Component {
  constructor(props) {
	  super(props);
  	this.onListItemClicked = this.onListItemClicked.bind(this);
  	this.state = {
  		account: UserService.getCurrentUser(),
			indexOfClickedItem: -1
  	};
  	this.mainContent = <MyProfile user={this.state.account}/>;  //this
  };

  componentDidMount(){
  }

  onListItemClicked(index) {
    this.setState({
      indexOfClickedItem: index
		});
		let data = "none";
	  if(index == 0){
			data = <MyProfile user={this.state.account}></MyProfile>
	  }else{
			data = <MyAdress />
	  }

  	this.mainContent = <p>{data}</p>;
  }


	render() {
	  return (
		<Page activeTab={4}>
			<Grid>
  			<Cell size={3} offset={1}>
					<p> Hello Muharrem </p>
					<img src="https://pbs.twimg.com/profile_images/996353371543138304/zo1w3vGs_400x400.jpg" 
					style={{width:"70%"}}/>
					<List >
  					<ListItem primaryText="My Profile" onClick= {() => this.onListItemClicked(0)}/>
  					<ListItem primaryText="My Adresses" onClick={() => this.onListItemClicked(1)}/>
  				</List>
				</Cell>
  			<Cell size={7} style={{margin: 30}}>
  					{this.mainContent} 
				</Cell>
  		</Grid>
		</Page>

	  );
	}
	
}

export default withRouter(AccountView);
