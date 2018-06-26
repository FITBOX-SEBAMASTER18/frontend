"use strict";

import React from 'react';
import Page from '../components/Page';

export class MenuView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <p>Menu View!</p>
            </Page>
        );
    }
}