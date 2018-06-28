import React from "react";
import { Grid, Cell, Media, CardTitle, MediaOverlay} from 'react-md';
import image1 from './home-meal.jpg';

export default () => {
    return (
	    	<Media aspectRatio="16-9">
	    		<img src={image1}/>
	    			<MediaOverlay>
						<CardTitle title="Wow. Amazing." />
					</MediaOverlay>
	    	</Media>
    )
}