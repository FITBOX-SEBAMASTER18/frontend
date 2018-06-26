import React from "react";
import { Grid, Cell, Media, CardTitle, MediaOverlay} from 'react-md';

export default () => {
    return (
	    	<Media aspectRatio="16-9">
	    		<img src="https://dynamicmedia.zuza.com/zz/m/original_/4/5/45d5ab38-5b77-45d6-b685-21b90f8c9f79/Column-4-Food___Super_Portrait.jpg"/>
	    			<MediaOverlay>
						<CardTitle title="Wow. Amazing." />
					</MediaOverlay>
	    	</Media>
    )
}