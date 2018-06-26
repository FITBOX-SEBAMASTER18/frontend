"use strict";

import React from 'react';
import Register from '../components/Register';

export class RegisterView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title : 'FitBox - Register'
        };
        document.title = this.state.title;
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    register(user) {
        console.log(user);
    }

    render() {
        return (
          <Register onSubmit={(user) => this.register(user) }>
          </Register>
        );
    }
}