"use strict";

import React from 'react';
import { Grid, Cell, Media, Paper, Chip, Button } from 'react-md';


class MealListItem extends React.Component {
    constructor (props) {
        super(props);
    }

    handleMealClick(meal) {
        this.props.handleMeal(meal);
    }

    render() {
        return (    
            <Cell phoneSize={6} tabletSize={4} desktopSize={4}>
                <Paper onClick={() => this.handleMealClick(this.props.meal)}>
                    <Media aspectRatio="16-9">
                        <img src="https://www.kitchentreaty.com/wp-content/uploads/2013/08/Brown-Butter-Parmesan-Spaghetti-2.jpg"/>
                    </Media>
                    <Grid>
                        <Cell align={'middle'} phoneSize={1} tabletSize={2} desktopSize={4}><Chip label={"Vegan"}/></Cell>
                        <Cell align={'middle'} phoneSize={1} tabletSize={2} desktopSize={4}><Chip label={"Vegan"}/></Cell>
                        <Cell align={'middle'} phoneSize={1} tabletSize={2} desktopSize={4}><Chip label={"Vegan"}/></Cell>
                        <Cell size={12}><label><b>{this.props.meal}</b></label></Cell>
                        <Grid>
                            <Cell phoneSize={3} tableSize={6} desktopSize={8}>
                                <Grid>
                                    <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>Calories:</b></label></Cell>
                                    <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>123</b></label></Cell>
                                    <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>Fat:</b></label></Cell>
                                    <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>123</b></label></Cell>
                                    <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>Carbs:</b></label></Cell>
                                    <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>123</b></label></Cell>
                                    <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>Protein:</b></label></Cell>
                                    <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>123</b></label></Cell>
                                </Grid>
                            </Cell>
                            <Cell align={'bottom'} phoneSize={1} tableSize={2} desktopSize={4}>
                                <Button icon primary swapTheming onClick={() => console.log("ADD CART")}>add_shopping_cart</Button>
                            </Cell>
                        </Grid>
                    </Grid>
                </Paper>
            </Cell>
        );
    }
}

export default MealListItem;