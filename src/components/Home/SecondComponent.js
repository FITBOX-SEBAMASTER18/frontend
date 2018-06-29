import React from "react";
import { Grid, Cell, FontIcon } from 'react-md';
import choose from './choose.png';
import cook from './cook.png';
import deliver from './delivery.png';

export default () => {
    return (
    	<Grid className="second-component">
            <Cell size = {12} className="description-title">
                <h1> HOW IT WORKS </h1>
            </Cell>
            <Cell size = {10} position="center" className="describing-icons">
                <Grid>
            		<Cell size={4} phoneSize={12}>
            			<Grid>
        			    	<img src={choose} className="image"/>
        			    </Grid>
                        <Grid className="description">
                            <p> Browse and order your meals</p>
                        </Grid>
            		</Cell>
            		<Cell size={4} phoneSize={12}>
                        <Grid>            
            			  <img src={cook} className="image"/>
                        </Grid>
                        <Grid className="description">
                            <p> We will cook the meals for you</p>
                        </Grid>
            		</Cell>
            		<Cell size={4} phoneSize={12}>
                        <Grid>            
                          <img src={deliver} className="image"/>
                        </Grid>
                        <Grid className="description">
                            <p> Have your meals delivered freshly in batches of 3-4 days</p>
                        </Grid>
            		</Cell>
                </Grid>
            </Cell>
    	</Grid>
    )
}