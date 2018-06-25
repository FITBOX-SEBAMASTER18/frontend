"use strict";

import React from 'react';
import Login from '../components/Login';


export class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        console.log("HAYDAR");
        console.log(user);
    }

    render() {
        return (
          <Login onSubmit={(user) => this.login(user)} error={this.state.error}>
          </Login>
        );
    }
}