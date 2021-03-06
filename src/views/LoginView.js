"use strict";

import React from 'react';
import Login from '../components/Login';
import UserService from '../services/UserService'

export class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        UserService.login(user).then( response => {
            if (response.success){
                UserService.setCurrentUser(response.data.user);
                this.props.history.push("/");
                location.reload();
            }
        }).catch( e => {
            this.setState({
                error: e
            })
        });
    }

    render() {
        return (
          <Login onSubmit={(user) => this.login(user)} error={this.state.error} />
        );
    }
}