"use strict";

import HttpService from './HttpService';

export default class AddressService {
    constructor(){
    }

    static baseURL() {return "http://localhost:6678/address" }

    static getAddress() {
        return new Promise((resolve, reject) => {
           HttpService.get(`${this.baseURL()}`, function(data) {
               resolve(data);
           }, function(textStatus) {
               reject(textStatus);
           });
        });
    }
}