"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { TextField, Button } from 'react-md';

import Page from './Page';
import { AlertMessage } from './AlertMessage';


class Register extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username : '',
            password : '',
            firstname : '',
            lastname : ''
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname
        };

        this.props.onSubmit(user);
    }

    handleChangeUsername(value) {
        this.setState(Object.assign({}, this.state, {username: value}));
    }

    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, {password: value}));
    }

    handleChangeFirstname(value) {
        this.setState(Object.assign({}, this.state, {firstname: value}));
    }

    handleChangeLastname(value) {
        this.setState(Object.assign({}, this.state, {lastname: value}));
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
                            <TextField
                                label="Firstname"
                                id="FirstnameField"
                                type="text"
                                className="md-row md-full-width"
                                required={true}
                                value={this.state.firstname}
                                onChange={this.handleChangeFirstname}
                                errorText="Firstname is required"/>
                            <TextField
                                label="Lastname"
                                id="LastnameField"
                                type="text"
                                className="md-row md-full-width"
                                required={true}
                                value={this.state.lastname}
                                onChange={this.handleChangeLastname}
                                errorText="Lastname is required"/>
                            <Button id="submit" type="submit"
                                disabled={this.state.username == undefined || this.state.username == '' || this.state.password == undefined || this.state.password == '' || this.state.firstname == undefined || this.state.firstname == '' || this.state.lastname == undefined || this.state.lastname == '' ? true : false}
                                raised primary className="md-row md-full-width">Register
                            </Button>
                            <Link to={'/login'} className="md-row md-full-width">Do you have an account?</Link>
                            <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                        </div>
                    </div>
                </form>
            </Page>
        );
    }
}

export default withRouter(Register);