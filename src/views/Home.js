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
import VoteService from '../services/VoteService';
import ReactPageScroller from "react-page-scroller";
import VoteModal from '../components/VoteModal';
import '../components/Home/home.scss'
export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1 ,
            meals: [],
            hasVoted: true,
            voteShown: false,
        };
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

        VoteService.hasVoted().then( response =>{
            console.log("Vote")
            console.log(response)
            this.setState({ hasVoted: true });
        }).catch(e => {
            this.setState({ hasVoted: false });
            console.log(e)
        })
    }

    render() {
        console.log(this.state);
        return (
            <Page activeTab={0}>
                {( !(this.state.hasVoted) ) ?
                    <VoteModal meals={this.state.meals}></VoteModal> 
                    : null
                }
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent meals={this.state.meals} />
            </Page>
        );
    }
}