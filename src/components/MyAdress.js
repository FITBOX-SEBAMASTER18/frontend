"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { List, ListItem, TextField, Button } from 'react-md';

import AdressList from './AdressList';


class MyAdress extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (  
            <div>  
            <h1> My Adresses </h1>
            <br/>
            <AdressList/>
            <br/>
            <Button raised primary >Add New</Button>
            <Button raised primary >Update</Button>
            <Button raised secondary>Delete</Button>
            </div>
        );
    }
}

export default withRouter(MyAdress);