"use strict";

import HttpService from './HttpService';

export default class VoteService {

    constructor(){
    }

    static baseURL() {return "http://localhost:6678/vote" }

    static hasVoted() {
        return new Promise((resolve, reject) => {
           HttpService.get(`${this.baseURL()}/myVote`, function(data) {
               resolve(data);
           }, function(textStatus) {
               reject(textStatus);
           });
        });
    }

    static vote(mealId) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${this.baseURL()}/create`, {
                meal: mealId,
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}