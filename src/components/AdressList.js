"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { List, ListItem, TextField, Button } from 'react-md';


class AdressList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (  
            <List>
        <ListItem
        primaryText="Ev"
        secondaryText="Ankara"
        threeLines
      />
      <ListItem
        primaryText="CHP Genel Merkezi"
        secondaryText="Ankara"
        threeLines
      />
    </List>
        );
    }
}

export default withRouter(AdressList);