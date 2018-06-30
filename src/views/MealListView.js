"use strict";

import React from 'react';
import MealList from '../components/Meals/MealList';
import MealService from '../services/MealService';
import MenuService from '../services/MenuService';

export class MealListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filters: [],
            meals: [],
            startDate: undefined,
            endDate: undefined
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        })
        MealService.getFilters().then(response => {
            this.setState({
                filters: response
            })
            return MenuService.getMenu()
        }).then( response => {
            console.log(response)
            if (response.success) { 
                this.setState({
                    startDate: new Date(response.data.startDate),
                    endDate: new Date(response.data.endDate),
                    meals: response.data.meals,
                    loading: false
                })            
            }
        }).catch(e => {
            console.log(e)
        })
    }

    handleMealClick(meal){
        this.props.history.push("/meal/"+ meal._id)
    }

    render() {
        return (
            <MealList filters = {this.state.filters} meals = {this.state.meals} handleMeal={(meal) => this.handleMealClick(meal)} startDate={this.state.startDate} endDate={this.state.endDate}/>
        );
    }
}