"use strict";

import React from 'react';
import Page from '../components/Page';

export class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <p>Main View!</p>
             </Page>
        );
    }
}