import React from "react";
import { Grid, Cell, FontIcon } from 'react-md';
import choose from './choose.png';
import cook from './cook.png';
import deliver from './delivery.png';

export default () => {
    return (
    	<Grid className="second-component">
    		<Cell size={4} phoneSize={12}>
    			<Grid>
			    	<img src={choose} className="image"/>
			    </Grid>
                <Grid className="description">
                    <p>How it works</p>
                </Grid>
    		</Cell>
    		<Cell size={4} phoneSize={12}>
                <Grid>            
    			  <img src={cook} className="image"/>
                </Grid>
                <Grid className="description">
                    <p> It works </p>
                </Grid>
    		</Cell>
    		<Cell size={4} phoneSize={12}>
                <Grid>            
                  <img src={deliver} className="image"/>
                </Grid>
                <Grid className="description">
                    <p> Like this </p>
                </Grid>
    		</Cell>
    	</Grid>
    )
}