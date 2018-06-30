"use strict";

import React from 'react';
import { Grid, Cell, Media, Paper, Chip, Button, SVGIcon, Tooltipped } from 'react-md';
import { LowCaloriesIcon, LowCarbsIcon, HighProteinIcon, GlutenFreeIcon, SoyFreeIcon, DairyFreeIcon, SpicyIcon, VegetarianIcon, PaleoFriendlyIcon} from './FilterIcons'

class MealListItem extends React.Component {
    constructor (props) {
        super(props);
        
    }

    handleMealClick(meal) {
        this.props.handleMeal(meal);
    }

    render() {
        let isHidden = false;
        if (this.props.checkedFilters != undefined) {
            // console.log(this.props.meal.filters);
            // console.log(this.props.checkedFilters);
            this.props.checkedFilters.forEach(checkedFilter => {
                // console.log(checkedFilter)
                if (!this.props.meal.filters.includes(checkedFilter.id)) {
                    isHidden = true;
                }
            })
        }
        return (    
            <Cell phoneHidden={isHidden} tabletHidden={isHidden} desktopHidden={isHidden} phoneSize={6} tabletSize={4} desktopSize={4}>
                <Paper onClick={() => this.handleMealClick(this.props.meal)}>
                    <Media aspectRatio="16-9">
                        <img src={this.props.meal.image}/>
                    </Media>
                    <Grid style={{"paddingBottom": "0"}}>
                        <Cell size={12} style={{"marginTop": "0", "marginBottom": "0"}}><p style={{"textAlign":"center"}}><i>{this.props.meal.name}</i></p></Cell>
                        <Cell align={'center'} size={12} style={{"marginTop": "0", "marginBottom": "0"}}>
                            <Grid style={{"padding": "0"}}>
                                <Cell size={0} desktopOffset={(12-this.props.meal.filters.count)/2} tabletOffset={(8-this.props.meal.filters.count)/2} phoneOffset={(this.props.meal.filters.count < 6) ? (6-this.props.meal.filters.count)/2 : 0}/>
                                <Cell desktopHidden={!this.props.meal.filters.includes('low-calories')} align={'center'} size={1} style={{position: 'relative'}}><Tooltipped label="Low Calories" position="top" delay={100} ><div><LowCaloriesIcon title="Low Calories" viewBox={'0 0 500 500'} primary/></div></Tooltipped></Cell>
                                <Cell desktopHidden={!this.props.meal.filters.includes('low-carb')} align={'center'} size={1} style={{position: 'relative'}}><Tooltipped label="Low Carb" position="top" delay={100} ><div><LowCarbsIcon title="Low Carb" viewBox={'0 0 60 60'} primary/></div></Tooltipped></Cell>
                                <Cell desktopHidden={!this.props.meal.filters.includes('high-protein')} align={'center'} size={1} style={{position: 'relative'}}><Tooltipped label="High Protein" position="top" delay={100} ><div><HighProteinIcon title="High Protein" viewBox={'0 0 60 60'} primary/></div></Tooltipped></Cell>
                                <Cell desktopHidden={!this.props.meal.filters.includes('gluten-free')} align={'center'} size={1} style={{position: 'relative'}}><Tooltipped label="Gluten-Free" position="top" delay={100} ><div><GlutenFreeIcon title="Gluten-Free" viewBox={'0 0 60 60'} primary/></div></Tooltipped></Cell>
                                <Cell desktopHidden={!this.props.meal.filters.includes('soy-free')} align={'center'} size={1} style={{position: 'relative'}}><Tooltipped label="Soy-Free" position="top" delay={100} ><div><SoyFreeIcon title="Soy-Free" viewBox={'0 0 60 60'} primary/></div></Tooltipped></Cell>
                                <Cell desktopHidden={!this.props.meal.filters.includes('dairy-free')} align={'center'} size={1} style={{position: 'relative'}}><Tooltipped label="Dairy-Free" position="top" delay={100} ><div><DairyFreeIcon title="Dairy-Free" viewBox={'0 0 60 60'} primary/></div></Tooltipped></Cell>
                                <Cell desktopHidden={!this.props.meal.filters.includes('spicy')} align={'center'} size={1} style={{position: 'relative'}}><Tooltipped label="Spicy" position="top" delay={100} ><div><SpicyIcon title="Spicy" viewBox={'0 0 60 60'} primary/></div></Tooltipped></Cell>
                                <Cell desktopHidden={!this.props.meal.filters.includes('vegetarian')} align={'center'} size={1} style={{position: 'relative'}}><Tooltipped label="Vegetarian" position="top" delay={100} ><div><VegetarianIcon title="Vegetarian" viewBox={'0 0 60 60'} primary/></div></Tooltipped></Cell>
                                <Cell desktopHidden={!this.props.meal.filters.includes('paleo-friendly')} align={'center'} size={1} style={{position: 'relative'}}><Tooltipped label="Paleo-Friendly" position="top" delay={100} ><div><PaleoFriendlyIcon title="Paleo-Friendly" viewBox={'0 0 60 60'} primary/></div></Tooltipped></Cell>
                            </Grid>
                        </Cell>
                    </Grid>
                </Paper>
            </Cell>
        );
    }
}

export default MealListItem;

// <Cell align={'center'} desktopOffset={(12-this.props.meal.filters.count)/2} tabletOffset={(8-this.props.meal.filters.count)/2} tabletOffset={(this.props.meal.filters.count < 6) ? (6-this.props.meal.filters.count)/2 : 0} size={1} style={{position: 'relative'}}><Tooltipped label="Low Calories" position="top" delay={100} ><div><LowCaloriesIcon title="Low Calories" viewBox={'0 0 500 500'} primary/></div></Tooltipped></Cell>

// <Cell phoneSize={3} tabletSize={6} desktopSize={8} style={{"margin": "0"}}>
                            //     <Grid style={{"padding": "0"}}>
                            //         <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>Calories:</b></label></Cell>
                            //         <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>123</b></label></Cell>
                            //         <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>Fat:</b></label></Cell>
                            //         <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>123</b></label></Cell>
                            //         <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>Carbs:</b></label></Cell>
                            //         <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>123</b></label></Cell>
                            //         <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>Protein:</b></label></Cell>
                            //         <Cell phoneSize={2} tabletSize={4} desktopSize={6}><label><b>123</b></label></Cell>
                            //     </Grid>
                            // </Cell>

                        //     <Grid style={{"padding": "0"}}>
                        //     <Cell align={'bottom'} phoneSize={1} tabletSize={2} desktopSize={4}>
                        //         <Button icon primary swapTheming onClick={() => console.log("ADD CART")}>add_shopping_cart</Button>
                        //     </Cell>
                        // </Grid>