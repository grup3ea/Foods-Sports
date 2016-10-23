"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('../rxjs-operators');
var UserService = (function () {
    //private headers = new Headers({'Content-Type': 'application/json'});
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.usersUrl = 'http://localhost:3006/server/users/'; // URL to web api
    }
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        return this.getUsers()
            .then(function (users) { return users.find(function (user) { return user.id === id; }); });
    };
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3006/server/users/register', JSON.stringify({ name: user.name, password: user.password }), options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.http.post('http://localhost:3006/server/users/login', JSON.stringify({ name: user.name, password: user.password }), options)
            .map(function (response) {
            var respJson = response.json();
            if (respJson.status && respJson.status === 'S') {
                _this.loginSuccess;
            }
            return respJson;
        });
    };
    UserService.prototype.loginSuccess = function () {
        this.router.navigateByUrl('dashboard');
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map