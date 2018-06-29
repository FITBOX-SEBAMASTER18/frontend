"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';

import { Grid, Cell } from 'react-md';

import Page from '../Page';
import { MealFilter } from './MealFilter';
import MealListItem from './MealListItem';



class MealList extends React.Component {
    constructor (props) {
        super(props);
    }

    handleMealClick(meal) {
        this.props.handleMeal(meal);
    }

    render() {
        return (  
            <Page isLoading = {this.props.isLoading}>
                <Grid>
                <Cell phoneHidden={true} tabletSize={2} desktopSize={3}>
                    <MealFilter filters={this.props.filters}/>
                </Cell>
                <Cell phoneSize={6} tabletSize={6} desktopSize={9}>
                    <Grid>
                    {this.props.meals.map((meal, i) => <MealListItem key={i} meal={meal} handleMeal={(meal) => this.handleMealClick(meal)}/>)}
                    </Grid>
                </Cell>
                </Grid>
            </Page>
        );
    }
}

export default withRouter(MealList);