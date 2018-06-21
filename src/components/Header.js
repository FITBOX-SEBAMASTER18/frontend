"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toolbar
                colored
                nav={<Button onClick={() => console.log("Button Clicked!")} icon>home</Button>}
                title={this.props.title}>
            </Toolbar>
        );
    }
};

export default Header;