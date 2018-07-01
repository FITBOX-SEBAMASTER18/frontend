import React from 'react';
import Page from '../components/Page';
import {Grid, Cell} from 'react-md';
import CartMealList from '../components/Cart/CartMealList';
import { withRouter } from 'react-router-dom';
import OrderService from '../services/OrderService';


class OrderView extends React.Component {
    constructor(props) {
			super(props);
			this.state = {
				order: undefined
			}
    };
	
	componentWillMount(props) {
        let id = this.props.match.params.id;
		OrderService.getOrderById(id).then(response => {
            console.log(response.data);
            if ( response.success ) {
                this.setState({
                    order: response.data
                })
            }
        }).catch(e => {
            console.log(e);
        })
	}

	render() {
	  return (
	      <Page>
            <Grid>
                <Cell size={12}>
                    <CartMealList cart={this.state.order} canDelete={false}></CartMealList>
                </Cell>
            </Grid>
	      </Page>
	  );
  }
}
export default withRouter(OrderView);

