"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { List, ListItem, TextField, Button } from 'react-md';


class AdressList extends React.Component {
    constructor (props) {
        super(props);


        this.state = {
            selected: null,
            indexOfClickedItem: -1
        };

        this.onListItemClicked = this.onListItemClicked.bind(this);
    }

    onListItemClicked(index) {
        this.setState({
            indexOfClickedItem: index
        });
        this.props.setAddressID(this.props.addresses[index]._id, this.props.addresses[index].label);
    }

    render() {
        return (  
            <List>
                {this.props.addresses.map((address, i) =>        
                    <ListItem
        primaryText={address.label}
        secondaryText={address.address}
        onClick= {() => {this.onListItemClicked(i)}}
        active= {this.state.indexOfClickedItem == i ? true: false}
        threeLines
      />)}
    </List>
        );
    }
}

export default withRouter(AdressList);