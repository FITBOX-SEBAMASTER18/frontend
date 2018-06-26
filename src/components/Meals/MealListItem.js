"use strict";

import React from 'react';
import { Cell, Media, Paper } from 'react-md';


class MealListItem extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (    
            <Cell phoneSize={6} tabletSize={4} desktopSize={4}>
                <Paper>
                    <Media aspectRatio="16-9">
                        <img src="http://www.bjjglobetrotter.com/wp-content/uploads/2011/03/4FB7BE53-E457-4181-917E-D776AC5F62B125.jpg"/>
                    </Media>
                    {this.props.meal}
                </Paper>
            </Cell>
        );
    }
}

export default MealListItem;