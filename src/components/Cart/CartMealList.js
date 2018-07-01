import React from 'react';
import {Grid, Cell} from 'react-md';
import { withRouter } from 'react-router-dom';
import CartMeal from './CartMeal';

class CartMealList extends React.Component {
  constructor(props) {
      super(props);
  };

    render() {
		var meals = [];
		if (this.props.cart != undefined) {
			meals = this.props.cart.meals;
		}

      return (
      	<div className="cart-meal-list">
      		<Grid>
      			<h1> Your Order </h1>
      		</Grid>
	        <Grid>
	        	<Cell size={4} className="image-title">
	        		<h2> Image </h2>
	        	</Cell>
	        	<Cell size={3} className="meal-title">
	        		<h2> Meal </h2>
	        	</Cell>
	        	<Cell size={3} className="amount-title">
	        		<h2> Amount </h2>
	        	</Cell>
	        	<Cell size={2}>
	        	</Cell>
	        </Grid>
	    		{meals.map((meal, i) => 
	    			<CartMeal key={i} meal={meal} handleDelete={this.props.handleDelete}/>
	    		)}
	      </div>
      );
  }
}
export default withRouter(CartMealList); 