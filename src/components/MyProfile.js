"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { TextField, Button } from 'react-md';

import { AlertMessage } from './AlertMessage';


class MyProfile extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username : '',
            firstname : '',
            lastname : '',
            picture: ''
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangePicture = this.handleChangePicture.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.setState({
            username: this.props.user.email,
            firstname: this.props.user.name,
            lastname: this.props.user.surname,
            picture: this.props.user.picture
        })
    }
    handleSubmit(event) {
        event.preventDefault();

        let user = {
            email: this.state.username,
            name: this.state.firstname,
            surname: this.state.lastname,
            picture: this.state.picture
        };

        this.props.onSubmit(user);
    }

    handleChangeUsername(value) {
        this.setState(Object.assign({}, this.state, {username: value}));
    }

    handleChangeFirstname(value) {
        this.setState(Object.assign({}, this.state, {firstname: value}));
    }

    handleChangeLastname(value) {
        this.setState(Object.assign({}, this.state, {lastname: value}));
    }

    handleChangePicture(value) {
        this.setState(Object.assign({}, this.state, {picture: value}));
    }

    render() {
        return (    
                <form className="md-grid" onSubmit={this.handleSubmit}>
                    <div className = "md-cell--12">
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
                            <TextField
                                label="Picture URL"
                                id="PictureField"
                                type="text"
                                className="md-row md-full-width"
                                value={this.state.picture}
                                onChange={this.handleChangePicture}
                                errorText="Lastname is required"/>
                            <Button id="submit" type="submit"
                                disabled={this.state.username == undefined || this.state.username == '' || this.state.firstname == undefined || this.state.firstname == '' || this.state.lastname == undefined || this.state.lastname == '' ? true : false}
                                raised primary className="md-row md-full-width">Update
                            </Button>
                            <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                        </div>
                    </div>
                </form>
        );
    }
}

export default withRouter(MyProfile);