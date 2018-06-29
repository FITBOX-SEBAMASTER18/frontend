"use strict";

import React from 'react';
import { Toolbar, Button, Tabs, Tab, TabsContainer } from 'react-md';
import { withRouter } from 'react-router-dom'
import HeaderTabs from './HeaderTabs'
import logo from '../../public/FitBox.png'

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toolbar
                colored
                nav={<Button onClick={() => this.props.history.push('/')} icon>home</Button>}
                title={this.props.title}
                children={
                    <HeaderTabs activeTab={this.props.activeTab}></HeaderTabs>
                }
                actions={
                    <Button flat primary swapTheming onClick={() => this.props.history.push('/login')} >Login / Shopping Cart</Button>
                }
            >
            </Toolbar>
        );
    }
};

export default withRouter(Header);