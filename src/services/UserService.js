"use strict";

import HttpService from "./HttpService";

export default class UserService {

    constructor() {
    }

    static baseURL() {return "http://localhost:6678/user"; }

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

    static edit(user) {
        let url = UserService.baseURL() + "/edit"
        return new Promise((resolve, reject) => {
            HttpService.post(url, {
                _id: user._id,
                email: user.email,
                name: user.name,
                surname: user.surname,
                picture: user.picture
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static logout(){
        window.localStorage.removeItem('jwtToken');
        window.localStorage.removeItem('user');
    }

    static setCurrentUser(user){
        window.localStorage['user'] = JSON.stringify(user);
    }

    static getCurrentUser() {
        return window.localStorage['user'] ? JSON.parse( window.localStorage['user'])  : null ;
    }

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }
}