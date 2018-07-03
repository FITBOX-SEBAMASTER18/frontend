import React from 'react';
import Page from '../components/Page';
import {Grid, Cell, Button} from 'react-md';
import CartMealList from '../components/Cart/CartMealList';
import AddressList from '../components/AdressList';
import { withRouter } from 'react-router-dom';
import CartService from '../services/CartService';
import AddressService from '../services/AddressService'


class CartView extends React.Component {
  constructor(props) {
			super(props);
			this.state = {
				cart: undefined,
				addresses: [],
				selectedAddress: -1,
				selectedAddressLabel: ""
			}
			this.handleDelete = this.handleDelete.bind(this);
			this.fetchCart = this.fetchCart.bind(this);
			this.setAddressID = this.setAddressID.bind(this);
			this.purchase = this.purchase.bind(this);
	};
	
	componentWillMount(props) {
		this.fetchCart()
		AddressService.getAddress().then( response => {
			if ( response.success ) {
					console.log(response.data);
					this.setState({
							addresses: response.data
					})
			}
	}).catch( e => {
			console.log(e)
	})
	}

	fetchCart(){
		CartService.getCart().then(response => {
			if ( response.success ) {
				this.setState({
					cart: response.data
				})
			}
		}).catch(e => {
			console.log(e);
		})
	}

	handleDelete(meal) {
		CartService.removeMealFromCart(meal).then(response => {
			if ( response.success ) {
				this.fetchCart()
			}
		}).catch(e => {
			console.log(e);
		});
	}

  setAddressID(id, label) {
      this.setState({
          selectedAddress: id,
          selectedAddressLabel: label
      });
      console.log(id);
      console.log(label);
  }

	purchase() {
		console.log("PURCHASE")
		CartService.purchase().then(response => {
			console.log(response)
			if ( response.success ) {
				this.fetchCart()
			}
		}).catch(e => {
			console.log(e);
		})
	}

	render() {
	  return (
	      <Page>
          <Grid>
	          <Cell size={9}>
              <CartMealList cart={this.state.cart} canDelete={true} handleDelete={this.handleDelete}></CartMealList>
	          </Cell>
	          <Cell size={3}>
	          	<AddressList addresses={this.state.addresses} setAddressID={this.setAddressID}></AddressList>
							<Button disabled={!(this.state.cart !== undefined && this.state.cart.meals.length !== 0 && this.state.selectedAddress !== -1)} onClick={() => {this.purchase()}} raised primary className="md-row md-full-width">Purchase
							</Button>
						</Cell>
          </Grid>
	      </Page>
	  );
  }
}
export default withRouter(CartView);