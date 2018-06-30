"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';

import { Grid, Cell, Card } from 'react-md';

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
            <Page activeTab={1} >
                <Grid>
                <Cell phoneHidden={true} tabletSize={2} desktopSize={3} style={{"position": "fixed"}}>
                    <Card>
                        <MealFilter className="mealFilter" filters={this.props.filters}/>
                    </Card>
                </Cell>
                <Cell phoneSize={6} tabletOffset={2} tabletSize={6} desktopOffset={3} desktopSize={9}>
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