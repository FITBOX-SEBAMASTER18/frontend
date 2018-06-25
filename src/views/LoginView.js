"use strict";

import React from 'react';
import Page from '../components/Page';


export class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
            <p>Login View!</p>
          </Page>
        );
    }
}