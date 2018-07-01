"use strict";

import React from 'react';
import Page from '../components/Page';
import { CardTitle, Media, MediaOverlay, Grid, Cell, Button, Snackbar } from 'react-md';
import MealService from '../services/MealService'
import CartService from '../services/CartService'

export class MealView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            meal: {
                "name": undefined,
                "image": undefined,
                "description": undefined,
                "calories": 0,
                "fat": 0,
                "protein": 0,
                "carbohydrates": 0,
            },
            toasts: [],
            autohide: true
        };
        this.addMealToCart = this.addMealToCart.bind(this);
        this.addToast = this.addToast.bind(this);
        this.dismissToast = this.dismissToast.bind(this);
    }

    componentWillMount(props){
        let id = this.props.match.params.id;
        MealService.getMealById(id).then( response => {
            if ( response.success ) {
                console.log(response.data);
                this.setState({
                    meal: response.data
                })
            }
        }).catch( e => {
            console.log(e)
        })
    }

    addMealToCart() {
        CartService.addMealToCart(this.state.meal).then( response => {
            if ( response.success ) {
                console.log(response);
                this.addToast("Meal Added to the Cart!")
            }
        }).catch( e => {
            this.addToast("Error: Meal Couldn't be added to the Cart!")
        })
    }

    addToast(text, action, autohide = true) {
        this.setState((state) => {
          const toasts = state.toasts.slice();
          toasts.push({ text, action });
          return { toasts, autohide };
        });
      };

    dismissToast(){
        const [, ...toasts] = this.state.toasts;
        this.setState({ toasts });
    };

    render() {
        const { toasts, autohide } = this.state;
        return (
            <Page activeTab={1}>
                <div className="md-grid">
                    <div className="md-cell md-cell--6">
                        <Media aspectRatio="4-3">
                            <img src={this.state.meal.image} />
                            <MediaOverlay>
                                <CardTitle title={this.state.meal.name} />
                            </MediaOverlay>
                        </Media>
                    </div>
                    <div className="md-cell md-cell--6">
                        <div className="md-grid">
                            <div className="md-cell md-cell--6" >
                                <h2 style={{verticalAlign: 'middle'}}>
                                    {this.state.meal.name}
                                </h2>
                            </div>
                        </div>
                        <div className="md-grid">
                            <div className="md-cell md-cell--3" align="center">
                                <p>
                                    Energy:
                                </p>
                                <p>
                                    {this.state.meal.calories} kcal
                                </p>
                            </div>
                            <div className="md-cell md-cell--3" align="center">
                                <p>
                                    Fat:
                                </p>
                                <p>
                                    {this.state.meal.fat} gr
                                </p>
                            </div>
                            <div className="md-cell md-cell--3" align="center">
                                <p>
                                    Carb:
                                </p>
                                <p>
                                    {this.state.meal.carbohydrates} gr
                                </p>
                            </div>
                            <div className="md-cell md-cell--3" align="center">
                                <p>
                                    Protein:
                                </p>
                                <p>
                                    {this.state.meal.protein} gr
                                </p>
                            </div>
                        </div>
                        <div className="md-grid">
                            <div className="md-cell md-cell--12">
                                <p align="justify">
                                    {this.state.meal.description}
                                </p>
                            </div>
                            <div className="md-cell md-cell--12" align="right">
                                <Button raised primary onClick={this.addMealToCart} ><b>Add To Cart:</b> {this.state.meal.price} Euro</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Snackbar
                    id="cart-snackbar"
                    toasts={toasts}
                    autohide={autohide}
                    onDismiss={this.dismissToast}
                />
            </Page>
        );
    }
}