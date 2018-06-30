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
            email : '',
            password : '',
            name : '',
            surname : ''
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname
        };

        this.props.onSubmit(user);
    }

    handleChangeEmail(value) {
        this.setState(Object.assign({}, this.state, {email: value}));
    }

    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, {password: value}));
    }

    handleChangeName(value) {
        this.setState(Object.assign({}, this.state, {name: value}));
    }

    handleChangeSurname(value) {
        this.setState(Object.assign({}, this.state, {surname: value}));
    }

    render() {
        return (    
            <Page>
                <form className="md-grid" onSubmit={this.handleSubmit}>
                    <div className = "md-cell--center md-cell--6">
                        <div className ="md-grid">
                            <TextField
                                label = "Email"
                                id = "EmailField"
                                type="text"
                                className="md-row md-full-width"
                                required={true}
                                value={this.state.email}
                                onChange={this.handleChangeEmail}
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
                                value={this.state.name}
                                onChange={this.handleChangeName}
                                errorText="Firstname is required"/>
                            <TextField
                                label="Lastname"
                                id="LastnameField"
                                type="text"
                                className="md-row md-full-width"
                                required={true}
                                value={this.state.surname}
                                onChange={this.handleChangeSurname}
                                errorText="Lastname is required"/>
                            <Button id="submit" type="submit"
                                disabled={this.state.email == undefined || this.state.email == '' || this.state.password == undefined || this.state.password == '' || this.state.name == undefined || this.state.name == '' || this.state.surname == undefined || this.state.surname == '' ? true : false}
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