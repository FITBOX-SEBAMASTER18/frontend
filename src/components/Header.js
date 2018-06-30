"use strict";

import React from 'react';
import UserService from "../services/UserService";
import { Toolbar, Button, Tabs, Tab, TabsContainer } from 'react-md';
import { withRouter } from 'react-router-dom'
import HeaderTabs from './HeaderTabs'
import logo from '../../public/FitBox.png'
import {Link} from 'react-router-dom'
import './header.scss'

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toolbar
                colored
                nav={<div className="header-logo">
                        <Link to="/">
                            <img src={logo}/>
                        </Link>
                    </div>}
                children={
                    <HeaderTabs activeTab={this.props.activeTab}></HeaderTabs>
                }
                actions={
                    (UserService.isAuthenticated())
                    ? <Button className="shopping-cart" floating secondary onClick={() => this.props.history.push('/cart')}>shopping_cart</Button>
                    : <Button className="header-login" raised secondary onClick={() => this.props.history.push('/login')} >Login</Button>                
                }
            >
            </Toolbar>
        );
    }
};

export default withRouter(Header);