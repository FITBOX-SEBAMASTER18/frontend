"use strict";

import HttpService from './HttpService';

export default class MealService {

    constructor(){
    }

    static baseURL() {return "http://localhost:6678/meal" }

    static getMealById(id) {
       return new Promise((resolve, reject) => {
           HttpService.get(`${this.baseURL()}/${id}`, function(data) {
               resolve(data);
           }, function(textStatus) {
               reject(textStatus);
           });
       });
    }

    static getFilters() {
        return new Promise((resolve, reject) => {
            var filters = ["low-calories","low-carb","","","","","",""];
            resolve(filters);
        }) 
    }
}