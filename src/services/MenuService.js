"use strict";

import HttpService from './HttpService';

export default class MealService {

    constructor(){
    }

    static baseURL() {return "http://localhost:6678/menu" }

    static getMenu() {
        return new Promise((resolve, reject) => {
           HttpService.get(`${this.baseURL()}/today`, function(data) {
               resolve(data);
           }, function(textStatus) {
               reject(textStatus);
           });
        });
    }
}