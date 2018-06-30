"use strict";

import HttpService from "./HttpService";

export default class UserService {

    constructor() {
    }

    static baseURL() {return "http://131.159.199.21:6678/user"; }

    static register(user) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/register`, {
                email: user.email,
                password: user.password,
                name: user.name,
                surname: user.surname
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static login(user) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/login`, {
                email: user.email,
                password: user.password
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static logout(){
        window.localStorage.removeItem('jwtToken');
    }

    static setCurrentUser(user){
        window.localStorage['user'] = JSON.stringify(user);
    }

    static getCurrentUser() {
        return JSON.parse(window.localStorage['user']);
    }

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }
}