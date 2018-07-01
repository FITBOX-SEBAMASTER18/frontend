import React from 'react';
import Page from '../components/Page';
import MyProfile from '../components/MyProfile';
import MyAdress from '../components/MyAdress';
import { withRouter } from 'react-router-dom';
import { List, ListItem, CardTitle, Media, MediaOverlay, Grid, Cell } from 'react-md';
import UserService from '../services/UserService';
import { LoadingOverlay, Loader } from 'react-overlay-loader';

import 'react-overlay-loader/styles.css';
import AddressService from '../services/AddressService';

class AccountView extends React.Component {
  constructor(props) {
	  super(props);
		this.state = {
			title : 'FitBox - My Account',
					 indexOfClickedItem: -1,
					 	addresses: [],
        		account: UserService.getCurrentUser()
				};
	
		document.title = this.state.title;
		this.handleAddNewAddress = this.handleAddNewAddress.bind(this);
		this.handleDeleteAddress = this.handleDeleteAddress.bind(this);
		this.handleUserEdit = this.handleUserEdit.bind(this);
		this.onListItemClicked = this.onListItemClicked.bind(this);
		this.mainContent = <MyProfile user={this.state.account} onSubmit={this.handleUserEdit}/>;
  };

  componentWillMount(props){
		AddressService.getAddress().then(response => {
				if (response.success) {
					this.setState({
						addresses: response.data
					})
				}
		}).catch(e => {
			console.log(e)
		})
	}

  onListItemClicked(index) {
    this.setState({
      indexOfClickedItem: index
		});
		let data = "none";
	  if(index == 0){
			data = <MyProfile user={this.state.account} onSubmit={this.handleUserEdit}></MyProfile>
	  }else{
			data=<MyAdress addresses={this.state.addresses} addressAdded={this.handleAddNewAddress} addressDeleted={this.handleDeleteAddress}/>
	  }

  	this.mainContent = <p>{data}</p>;
	}

	handleUserEdit(user) {
		let currentUser = UserService.getCurrentUser()
		user._id = currentUser._id;
		UserService.edit(user).then(response => {
			if ( response.success ) {
				UserService.setCurrentUser(response.data.user);		
				this.setState({
					account: UserService.getCurrentUser()
				})
			}
		}).catch(e => {
			console.log(e);
		})
	}
	
	handleAddNewAddress(address) {
		AddressService.addNewAddress(address).then(response => {
			if ( response.success ) {
				let addressList = this.state.addresses;
				addressList.push(response.data);
				this.setState({
					addresses: addressList
				});
			}
		}).catch(e => {
			console.log(e);
		})
	}

	handleDeleteAddress(address) {
		AddressService.deleteAddress(address).then(response => {
			if ( response.success ) {
				let addressList = this.state.addresses;
				let index = addressList.indexOf(address);
				addressList.splice(index, 1);
				this.setState({
					addresses: addressList
				});
			}
		}).catch(e => {
			console.log(e);
		})
	}

	render() {
	  return (
		<Page activeTab={4}>
			<Grid>
  			<Cell size={3} offset={1}>
					<p> Hello {this.state.account.name} </p>
					<media aspectRatio={'1-1'}>
					<img src={this.state.account.picture} 
					style={{width:"70%"}}/>
					</media>
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
