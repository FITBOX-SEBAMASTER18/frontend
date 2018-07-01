"use strict";

import HttpService from './HttpService';

export default class CartService {

    constructor(){
    }

    static baseURL() {return "http://localhost:6678/cart" }

    static getCart() {
        let url = this.baseURL() + "/userCart";

        return new Promise((resolve, reject) => {
            HttpService.get(url, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    static createCart() {
        let url = this.baseURL() + "/create";
        return new Promise((resolve, reject) => {
            HttpService.post(url, {}, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static addMealToCart(meal) {
        let url = this.baseURL() + "/addToCart";
        return new Promise((resolve, reject) => {
            HttpService.post(url, {
                mealId: meal._id
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}