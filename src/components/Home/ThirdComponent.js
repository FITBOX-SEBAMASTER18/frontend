import React from "react";
import { withRouter } from 'react-router-dom';

import { Grid, Cell, Media, MediaOverlay, CardTitle } from 'react-md';

import Page from '../Page';
import MealListItem from '../Meals/MealListItem';


class ThirdComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            meals: this.props.meals
        }
    }

    render() {
        if (this.props.meals != "") {
            return (
                <Grid>
                    <Cell size = {12} className="description-title">
                <h1> Sample Meals from This Week </h1>
            </Cell>
                    <Cell size = {4}>
                        <Media><img src={this.props.meals[0].image} /><MediaOverlay>
                            <CardTitle title={this.props.meals[0].name} />
                        </MediaOverlay></Media>
                    </Cell>
                    <Cell size = {4}>
                        <Media><img src={this.props.meals[1].image} /><MediaOverlay>
                            <CardTitle title={this.props.meals[1].name} />
                        </MediaOverlay></Media>
                    </Cell>
                    <Cell size = {4}>
                        <Media><img src={this.props.meals[2].image} /><MediaOverlay>
                            <CardTitle title={this.props.meals[2].name} />
                        </MediaOverlay></Media>
                    </Cell>
                </Grid>
            );
        }
        else {
            console.log("meals empty")
            return null
        }
    }
}

export default withRouter(ThirdComponent);