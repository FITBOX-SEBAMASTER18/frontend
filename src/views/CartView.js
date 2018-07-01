import React from 'react';
import Page from '../components/Page';
import {Grid, Cell, Button} from 'react-md';
import CartMealList from '../components/Cart/CartMealList';
import AddressCell from '../components/Cart/AddressCell';
import { withRouter } from 'react-router-dom';
import CartService from '../services/CartService';
import AddressService from '../services/AddressService'


class CartView extends React.Component {
  constructor(props) {
			super(props);
			this.state = {
				cart: undefined,
				addresses: []
			}
			this.handleDelete = this.handleDelete.bind(this);
			this.fetchCart = this.fetchCart.bind(this);
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
							<AddressCell addresses={this.state.addresses}></AddressCell>
							<Button onClick={() => {this.purchase()}} raised primary className="md-row md-full-width">Purchase
							</Button>
						</Cell>
          </Grid>
	      </Page>
	  );
  }
}
export default withRouter(CartView);