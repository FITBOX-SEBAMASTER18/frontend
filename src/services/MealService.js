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
    static getMeals() {
       return new Promise((resolve, reject) => {
           HttpService.get(`${this.baseURL()}`, function(data) {
               resolve(data);
           }, function(textStatus) {
               reject(textStatus);
           });
       });
    }
    static getFilters() {
        return new Promise((resolve, reject) => {
            var filters =   [{id: "low-calories", text: "Low Calories"},
                            {id: "low-carb", text: "Low Carbonhydrates"},
                            {id: "high-protein", text: "High Protein"},
                            {id: "gluten-free", text: "Gluten Free"},
                            {id: "soy-free", text: "Soy Free"},
                            {id: "dairy-free", text: "Dairy Free"},
                            {id: "spicy", text: "Spicy"},
                            {id: "vegetarian", text: "Vegetarian"},
                            {id: "paleo-friendly", text: "Paleo Friendly"}
                        ];
            resolve(filters);
        }) 
    }
}