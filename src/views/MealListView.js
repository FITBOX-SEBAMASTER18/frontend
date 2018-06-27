"use strict";

import React from 'react';
import MealList from '../components/Meals/MealList';
import MealService from '../services/MealService';

export class MealListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            title: 'FitBox - Meals',
            filters: [],
            meals: []
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        })
        MealService.getFilters().then(data => {
            this.setState({
                filters: data
            })
            return MealService.getMeals()
        }).then( data => {
            this.setState({
                meals: data,
                loading: false
            })            
        }).catch(e => {
            console.log(e)
        })
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    handleMealClick(meal){
        console.log(meal);
        this.props.history.push("/meal")
    }

    render() {
        return (
            <MealList filters = {this.state.filters} meals = {this.state.meals} handleMeal={(meal) => this.handleMealClick(meal)}/>
        );
    }
}