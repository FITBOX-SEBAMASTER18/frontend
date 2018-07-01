import React from 'react';
import {Grid, Cell, Media} from 'react-md';
import { withRouter } from 'react-router-dom';
import {Button} from 'react-md';
import './cartmeal.scss';

class CartMeal extends React.Component {
  constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
  };

  handleDelete(){
    this.props.handleDelete(this.props.meal);
  }

    render() {
        let meal = this.props.meal;
        let count = this.props.count;
        var button;
        if (this.props.canDelete){
            button = <Button className="delete-meal" icon onClick={this.handleDelete}>delete</Button>
        }
      return (
          <div className="cart-meal">
          <Grid>
              <Cell size={4} className="meal-img">
                <Media aspectRatio="16-9">
                  <img src={meal.image}/>
                  </Media>
          	</Cell>
          	<Cell size={3} className="meal-name">
          		<span> {meal.name} </span>
          	</Cell>
          	<Cell size={2} className="meal-amount">
          		<span> {count} </span>          		
              </Cell>
              <Cell size={2} className="meal-amount">
          		<span> {meal.price * count} €</span>          		
          	</Cell>
          	<Cell size={1}>
              {button}
          	</Cell>
          </Grid>
          </div>
      );
  }
}
export default withRouter(CartMeal); 