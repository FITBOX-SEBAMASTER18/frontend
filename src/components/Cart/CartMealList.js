import React from 'react';
import {Grid, Cell} from 'react-md';
import { withRouter } from 'react-router-dom';
import CartMeal from './CartMeal';

class CartMealList extends React.Component {
  constructor(props) {
      super(props);
  };

    render() {
    	let mockMeal = [{
	      name:           "Kebap",
	      amount:         99,
	      ingredients:    ["meat", "spice", "bread"],
	      calories:       1000,
	      fat:            20,
	      protein:        20,
	      carbohydrates:  50,
	      price:          10,
	      image:   				"https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/26198470_294713667718216_1607546832873495585_o.jpg?_nc_cat=0&oh=4e6422f80f73a418b22154a2a9d57d19&oe=5BE844F1"
    	},
    	{
	      name:           "Kebap",
	      amount:         99,
	      ingredients:    ["meat", "spice", "bread"],
	      calories:       1000,
	      fat:            20,
	      protein:        20,
	      carbohydrates:  50,
	      price:          10,
	      image:   				"https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/26198470_294713667718216_1607546832873495585_o.jpg?_nc_cat=0&oh=4e6422f80f73a418b22154a2a9d57d19&oe=5BE844F1"
    	}];

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
	    		{mockMeal.map((meal, i) => 
	    			<CartMeal key={i} meal={meal}/>
	    		)}
	      </div>
      );
  }
}
export default withRouter(CartMealList); 