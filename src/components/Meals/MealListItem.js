"use strict";

import React from 'react';
import { Grid, Cell, Media, Paper, Chip, Button, SVGIcon } from 'react-md';
import { LowCaloriesIcon, LowCarbsIcon, HighProteinIcon, GlutenFreeIcon, SoyFreeIcon, DairyFreeIcon, SpicyIcon, VegetarianIcon, PaleoFriendlyIcon} from './FilterIcons'

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
                        <Cell align={'middle'} size={12}>
                            <Grid>
                                <Cell align={'middle'} size={1}><LowCaloriesIcon title="Low Calories" viewBox={'0 0 600 600'} primary/></Cell>
                                <Cell align={'middle'} size={1}><LowCarbsIcon title="Low Carb" viewBox={'0 0 60 60'} primary/></Cell>
                                <Cell align={'middle'} size={1}><HighProteinIcon title="High Protein" viewBox={'0 0 60 60'} primary/></Cell>
                                <Cell align={'middle'} size={1}><GlutenFreeIcon title="Gluten-Free" viewBox={'0 0 60 60'} primary/></Cell>
                                <Cell align={'middle'} size={1}><SoyFreeIcon title="Soy-Free" viewBox={'0 0 60 60'} primary/></Cell>
                                <Cell align={'middle'} size={1}><DairyFreeIcon title="Dairy-Free" viewBox={'0 0 60 60'} primary/></Cell>
                                <Cell align={'middle'} size={1}><SpicyIcon title="Spicy" viewBox={'0 0 60 60'} primary/></Cell>
                                <Cell align={'middle'} size={1}><VegetarianIcon title="Vegetarian" viewBox={'0 0 60 60'} primary/></Cell>
                                <Cell align={'middle'} size={1}><PaleoFriendlyIcon title="Paleo-Friendly" viewBox={'0 0 60 60'} primary/></Cell>
                            </Grid>
                        </Cell>

                        <Cell size={12}><label><b>{this.props.meal}</b></label></Cell>
                        <Grid>
                            <Cell phoneSize={3} tabletSize={6} desktopSize={8}>
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
                            <Cell align={'bottom'} phoneSize={1} tabletSize={2} desktopSize={4}>
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