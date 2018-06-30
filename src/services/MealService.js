"use strict";

import HttpService from './HttpService';

export default class MealService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/meals" }

    static getMeals() {
        return new Promise((resolve, reject) => {
            var meals = ['Spaghetti Parmesan','Hamburger2','Hamburger3','Hamburger4','Hamburger5','Hamburger6'];
            resolve(meals);
        }) 
    //    return new Promise((resolve, reject) => {
    //        HttpService.get(this.baseURL(), function(data) {
    //            resolve(data);
    //        }, function(textStatus) {
    //            reject(textStatus);
    //        });
    //    });
    }

    static getMeal(id) {

        // return new Promise((resolve, reject) => {
        //     HttpService.get(`${MealService.baseURL()}/${id}`, function(data) {
        //         if(data != undefined || Object.keys(data).length !== 0) {
        //             resolve(data);
        //         }
        //         else {
        //             reject('Error while retrieving movie');
        //         }
        //     }, function(textStatus) {
        //         reject(textStatus);
        //     });
        // });
    }

    static getFilters() {
        return new Promise((resolve, reject) => {
            var filters = [{text:'Ben', isSelected: true}, {text:'Sen', isSelected: false}, {text:'O', isSelected: true}, {text:'O', isSelected: true}, {text:'O', isSelected: true}, {text:'O', isSelected: true}, {text:'O', isSelected: true}];
            resolve(filters);
        }) 
        // return new Promise((resolve, reject) => {
        //     HttpService.get(`${MealService.baseURL()}/filters`, function(data) {
        //         resolve(data);
        //     }, function(textStatus) {
        //         reject(textStatus);
        //     });
        // });
    }
}