"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { TextField, Button } from 'react-md';

import Page from './Page';
import { AlertMessage } from './AlertMessage';


class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username : '',
            password : ''
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.onSubmit(user);
    }

    handleChangeUsername(value) {
        this.setState(Object.assign({}, this.state, {username: value}));
    }

    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, {password: value}));
    }

    render() {
        return (    
            <Page>
                <form className="md-grid" onSubmit={this.handleSubmit}>
                    <div className = "md-cell--center md-cell--6">
                        <div className ="md-grid">
                            <TextField
                                label = "Email/Username"
                                id = "UsernameField"
                                type="text"
                                className="md-row md-full-width"
                                required={true}
                                value={this.state.username}
                                onChange={this.handleChangeUsername}
                                errorText="Login is required"/>
                            <TextField
                                label="Password"
                                id="PasswordField"
                                type="password"
                                className="md-row md-full-width"
                                required={true}
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                                errorText="Password is required"/>
                            <Button id="submit" type="submit"
                                disabled={this.state.username == undefined || this.state.username == '' || this.state.password == undefined || this.state.password == '' ? true : false}
                                raised primary className="md-row md-full-width">Login
                            </Button>
                            <Link to={'/register'} className="md-row md-full-width">Not registered yet?</Link>
                            <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                        </div>
                    </div>
                </form>
            </Page>
        );
    }
}

export default withRouter(Login);