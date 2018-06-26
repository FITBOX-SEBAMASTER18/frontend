import React from "react";
import { Grid, Cell, FontIcon } from 'react-md';

export default () => {
    return (
    	<Grid>
    		<Cell size={4} phoneSize={12}>
    			<div>
			    	<FontIcon >fastfood</FontIcon>
			    	<p> Choose meal </p>
			    </div>
    		</Cell>
    		<Cell size={4} phoneSize={12}>
    			It works
    		</Cell>
    		<Cell size={4} phoneSize={12}>
    			Like this
    		</Cell>
    	</Grid>
    )
}