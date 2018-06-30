"use strict";

import React from 'react';
import Page from '../components/Page';
import { CardTitle, Media, MediaOverlay, Grid, Cell, Button } from 'react-md';
import MealService from '../services/MealService'

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
            }
        };
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

    render() {
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
                                <p style={{verticalAlign: 'middle'}}>
                                    {this.state.meal.name}
                                </p>
                            </div>
                            <div className="md-cell md-cell--6" align="right">
                                <Button icon primary >add_shopping_cart</Button>
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
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}