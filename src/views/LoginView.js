"use strict";

import React from 'react';
import Login from '../components/Login';


export class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title : 'FitBox - Login'
        };
        document.title = this.state.title;
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    login(user) {
        console.log(user);
    }

    render() {
        return (
          <Login onSubmit={(user) => this.login(user)} error={this.state.error}>
          </Login>
        );
    }
}