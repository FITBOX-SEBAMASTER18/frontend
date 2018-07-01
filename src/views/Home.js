"use strict";

import React from 'react';
import Page from '../components/Page';
import FirstComponent from "../components/Home/FirstComponent";
import SecondComponent from "../components/Home/SecondComponent";
import ThirdComponent from "../components/Home/ThirdComponent";
import MealListItem from '../components/Meals/MealListItem';
import MenuService from "../services/MenuService";
import MealService from "../services/MealService";
import VoteService from '../services/VoteService';
import ReactPageScroller from "react-page-scroller";
import VoteModal from '../components/VoteModal';
import '../components/Home/home.scss'
export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1 ,
            menu: [],
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
                    menu: response.data.meals,
                    loading: false
                })         
            }
        }).catch(e => {
            console.log(e)
        })

        MealService.getMeals().then( response => {
            console.log(response)
            if (response.success) { 
                let tempMeals = getRandom(response.data, 3);
                console.log("tempMeals")
                console.log(tempMeals);
                this.setState({
                    meals: tempMeals,
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
        console.log("STATE")
        console.log(this.state);
        return (
            <Page activeTab={0}>
                {(!this.state.hasVoted) ?
                    <VoteModal meals={this.state.meals}></VoteModal> 
                    : null
                }
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent meals={this.state.menu} />
            </Page>
        );
    }
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}