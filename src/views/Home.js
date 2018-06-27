"use strict";

import React from 'react';
import Page from '../components/Page';
import FirstComponent from "../components/Home/FirstComponent";
import SecondComponent from "../components/Home/SecondComponent";
import ThirdComponent from "../components/Home/ThirdComponent";
import FourthComponent from "../components/Home/FourthComponent";
import FifthComponent from "../components/Home/FifthComponent";
import ReactPageScroller from "react-page-scroller";

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
        this.goToPage = this.goToPage.bind(this)
        this.pageOnChange = this.pageOnChange.bind(this)
    };

    goToPage(eventKey) {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange(number) {
        this.setState({currentPage: number});
    };

    render() {
        return (
            <Page>
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
                <FourthComponent goToPage={this.goToPage}/>
                <FifthComponent/>
            </Page>
        );
    }
}