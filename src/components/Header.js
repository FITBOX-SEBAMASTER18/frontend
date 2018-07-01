"use strict";

import React from 'react';
import UserService from "../services/UserService";
import { Toolbar, Button, Tabs, Tab, TabsContainer, Snackbar } from 'react-md';
import { withRouter } from 'react-router-dom'
import HeaderTabs from './HeaderTabs'
import logo from '../../public/FitBox.png'
import {Link} from 'react-router-dom'
import './header.scss'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { toasts: [], autohide: true };          
        this.handleLogout = this.handleLogout.bind(this);
        this.addToast = this.addToast.bind(this);
        this.dismissToast = this.dismissToast.bind(this);
    }
 

    addToast(text, action, autohide = true){
        this.setState((state) => {
          const toasts = state.toasts.slice();
          toasts.push({ text, action });
          return { toasts, autohide };
        });
    };

    handleLogout(){
        UserService.logout();
        this.props.history.push("/");
        location.reload();
        this.addToast('Logged Out!');
    }
    dismissToast(){
        const [, ...toasts] = this.state.toasts;
        this.setState({ toasts });
    };
    render() {
        const { toasts, autohide } = this.state;
        return (
            <div>
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
                    ?     
                        <div className="header-right-buttons">
                            <Button className="shopping-cart" tooltipLabel="Shopping Cart" floating secondary onClick={() => this.props.history.push('/cart')}>shopping_cart</Button>
                            <Button className="logout" tooltipLabel="Logout" floating secondary onClick={this.handleLogout}>power_settings_new</Button>
                        </div>
                    
                    : <Button className="header-login" raised secondary onClick={() => this.props.history.push('/login')} >Login</Button>                
                }
            >
            </Toolbar>
            <Snackbar
              id="example-snackbar"
              toasts={toasts}
              autohide={autohide}
              onDismiss={this.dismissToast}
            />
            </div>
        );
    }
};

export default withRouter(Header);