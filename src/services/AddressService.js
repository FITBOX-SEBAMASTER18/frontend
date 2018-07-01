"use strict";

import HttpService from './HttpService';

export default class AddressService {
    constructor(){
    }

    static baseURL() {return "http://localhost:6678/address" }

    static getAddress() {
        let url = this.baseURL() + "/user/"
        return new Promise((resolve, reject) => {
           HttpService.post(url, {} , function(data) {
               resolve(data);
           }, function(textStatus) {
               reject(textStatus);
           });
        });
    }

    static addNewAddress(address) {
        let url = this.baseURL() + "/create"
        return new Promise((resolve, reject) => {
            HttpService.post(url, {
                address: address.address,
                label: address.label
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
         });
    }

    static deleteAddress(address) {
        let url = this.baseURL() + "/remove"
        return new Promise((resolve, reject) => {
            HttpService.post(url, {
                _id: address._id
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}