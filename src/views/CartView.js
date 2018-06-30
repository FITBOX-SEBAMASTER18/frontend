import React from 'react';
import Page from '../components/Page';
import {Grid, Cell} from 'react-md';
import CartMealList from '../components/Cart/CartMealList';
import AddressCell from '../components/Cart/AddressCell';
import { withRouter } from 'react-router-dom';


class CartView extends React.Component {
  constructor(props) {
      super(props);
  };

	render() {
	  return (
	      <Page>
          <Grid>
	          <Cell size={9}>
              <CartMealList></CartMealList>
	          </Cell>
	          <Cell size={3}>
	          	<AddressCell></AddressCell>
	          </Cell>
          </Grid>
	      </Page>
	  );
  }
}
export default withRouter(CartView);