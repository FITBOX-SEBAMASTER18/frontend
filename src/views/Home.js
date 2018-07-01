"use strict";

import React from 'react';
import Page from '../components/Page';
import FirstComponent from "../components/Home/FirstComponent";
import SecondComponent from "../components/Home/SecondComponent";
import ThirdComponent from "../components/Home/ThirdComponent";
import FourthComponent from "../components/Home/FourthComponent";
import FifthComponent from "../components/Home/FifthComponent";
import MealListItem from '../components/Meals/MealListItem';
import MenuService from "../services/MenuService";
import ReactPageScroller from "react-page-scroller";
import VoteModal from '../components/VoteModal';
import '../components/Home/home.scss'
export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentPage: 1 , meals: []};
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
    componentWillMount() {
        this.setState({
            loading: true
        })
        MenuService.getMenu().then( response => {
            console.log(response)
            if (response.success) { 
                this.setState({
                    meals: response.data.meals,
                    loading: false
                })         
            }
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <Page activeTab={0}>
                <VoteModal meals={this.state.meals} ></VoteModal>
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent meals={this.state.meals} />
                <FourthComponent goToPage={this.goToPage}/>
                <FifthComponent/>
            </Page>
        );
    }
}