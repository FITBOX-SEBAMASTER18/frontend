import React from "react";
import { Grid, Cell, Media, CardTitle, MediaOverlay} from 'react-md';
import image1 from './home-meal.jpg';
import logo from '../../../public/FitBox-Orange.png'

export default () => {
    return (
    	<Grid size={12}  className="home-image">
    		<div className="home-image-box">
    			<img src={logo}/>
    			<h2> What is FitBox </h2>
    			<p> Have your meals delivered! </p>
    		</div>
	  		<img src={image1} className="cover-img"/>
	  	</Grid>
    )
}