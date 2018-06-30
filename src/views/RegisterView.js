"use strict";

import React from 'react';
import Register from '../components/Register';
import UserService from '../services/UserService';
import CartService from '../services/CartService';

export class RegisterView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    register(user) {
        UserService.register(user).then( response => {
            console.log(response)
            if ( response.success ) {

                UserService.login(user).then( response => {
                    UserService.setCurrentUser(response.data.user);
                    console.log("BEFORE CREATE")
                     return CartService.createCart();
                }).then(() => {
                        console.log("AFTER THEN")
                     this.props.history.push("/");
                }).catch( e => {

                })
            }
        }).catch( e => {
            this.setState({
                error: e
            })
        })
    }

    render() {
        return (
          <Register onSubmit={(user) => this.register(user)} error={this.state.error}>
          </Register>
        );
    }
}