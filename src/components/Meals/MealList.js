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
        this.state = {
            filteredMeals: this.props.meals,
            checkedFilters: this.props.filters
        }
    }

    handleMealClick(meal) {
        this.props.handleMeal(meal);
    }

    

    render() {
        let weekHeader;
        if (this.props.startDate != undefined) {
            weekHeader = <Cell size={12}><h2 style={{"textAlign":"center"}}>{"The week of " + this.props.startDate.toLocaleString("en-us", {month: "long"}) + " " + this.props.startDate.getDay() }</h2></Cell>
        } else {
            weekHeader = <Cell size={12}><h2 style={{"textAlign":"center"}}>{"The week of undefined" }</h2></Cell>
        }
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
                    { weekHeader }
                    {this.props.meals.map((meal, i) => <MealListItem key={i} meal={meal} handleMeal={(meal) => this.handleMealClick(meal)}/>)}
                    </Grid>
                </Cell>
                </Grid>
            </Page>
        );
    }
}

export default withRouter(MealList);