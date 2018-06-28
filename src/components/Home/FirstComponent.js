import React from "react";
import { Grid, Cell, Media, CardTitle, MediaOverlay} from 'react-md';
import image1 from './home-meal.jpg';

export default () => {
    return (
    	<Grid size={12}  className="home-image">
	  		<img src={image1}/>
	  	</Grid>
    )
}