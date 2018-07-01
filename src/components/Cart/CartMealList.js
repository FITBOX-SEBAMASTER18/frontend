import React from 'react';
import {Grid, Cell} from 'react-md';
import { withRouter } from 'react-router-dom';
import CartMeal from './CartMeal';

class CartMealList extends React.Component {
  constructor(props) {
      super(props);
  };

    render() {
		var countedMeals = [];
		var price = 0;
		if (this.props.cart != undefined) {
			this.props.cart.meals.forEach(meal => {
				var count = this.props.cart.meals.filter(meal2 => {return meal._id === meal2._id}).length
				if (countedMeals.filter(mealObj => {return mealObj.meal._id === meal._id}).length <= 0){
					countedMeals.push({meal: meal, count: count})
				}
			})
			if ( this.props.cart.price ) {
				price = this.props.cart.price;
			} else {
				this.props.cart.meals.forEach(meal => {
					price += meal.price;
				})
			}
		}
		console.log(countedMeals)
      return (
      	<div className="cart-meal-list">
      		<Grid>
      			<h1> Your Order </h1>
      		</Grid>
	        <Grid>
	        	<Cell size={4} className="image-title">
	        	</Cell>
	        	<Cell size={3} className="meal-title">
	        		<h2> Meal </h2>
	        	</Cell>
	        	<Cell size={2} className="amount-title">
	        		<h2> Amount </h2>
						</Cell>
						<Cell size={2} className="amount-title">
	        		<h2> Price </h2>
	        	</Cell>
	        	<Cell size={1}>
	        	</Cell>
					</Grid>
					<hr
							style={{
									color: "black",
									height: 1
							}}
					/>
	    		{countedMeals.map((mealObj, i) => 
	    			<CartMeal key={i} meal={mealObj.meal} count={mealObj.count} handleDelete={this.props.handleDelete} canDelete={this.props.canDelete}/>
					)}
					<hr
							style={{
									color: "black",
									height: 1
							}}
					/>
					<Grid>
						<Cell offset={7} size={2} className="amount-title"> <h2>Total</h2> </Cell>
						<Cell size={2} className="amount-title">
							<h2 style={{'textAlign': 'center'}}>{price} €</h2>
						</Cell>
					</Grid>
	      </div>
      );
  }
}
export default withRouter(CartMealList); 