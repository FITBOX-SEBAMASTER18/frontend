"use strict";

import HttpService from './HttpService';

export default class OrderService {

    constructor(){
    }

    static baseURL() {return "http://localhost:6678/order" }

    static getOrdersOfUser() {
        let url = OrderService.baseURL() + "/user/"
        return new Promise((resolve, reject) => {
           HttpService.get(url, function(data) {
               resolve(data);
           }, function(textStatus) {
               reject(textStatus);
           });
        });
    }

    static getOrderById(id) {
        let url = OrderService.baseURL() + "/" + id
        return new Promise((resolve, reject) => {
            HttpService.get(url, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
         });
    }
}