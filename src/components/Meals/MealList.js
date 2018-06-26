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

    render() {
        return (  
            <Page>
                <Grid>
                <Cell phoneHidden={true} tabletSize={2} desktopSize={3}>
                    <MealFilter filters={this.props.filters}/>
                </Cell>
                <Cell phoneSize={6} tabletSize={6} desktopSize={9}>
                    <Grid>
                    {this.props.meals.map((meal, i) => <MealListItem meal={meal}/>)}
                    </Grid>
                </Cell>
                </Grid>
            </Page>
        );
    }
}

export default withRouter(MealList);