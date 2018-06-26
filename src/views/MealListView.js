"use strict";

import React from 'react';
import Page from '../components/Page';
import MealList from '../components/Meals/MealList';

export class MealListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'FitBox - Meals',
            filters: ['Ben', 'Sen', 'O'],
            meals: ['Hamburger','Hamburger','Hamburger','Hamburger','Hamburger','Hamburger']
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return (
            <MealList filters = {this.state.filters} meals = {this.state.meals}/>
        );
    }
}