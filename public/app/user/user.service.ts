import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

import {User} from './user';

import '../rxjs-operators';

@Injectable()
export class UserService {

    private usersUrl = 'http://localhost:3006/server/users/';  // URL to web api

    //private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private router: Router) {}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    getUser(id: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }

    register(user) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:3006/server/users/register',
            JSON.stringify({name: user.name, password: user.password}), options)
            .map(response => response.json())
    }

    login(user) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});
        return this.http.post('http://localhost:3006/server/users/login',
            JSON.stringify({name: user.name, password: user.password}), options)
            .map(response => {
                var respJson = response.json();
                if (respJson.status && respJson.status === 'S') {
                    this.loginSuccess;
                }
                return respJson;
            });
    }

    private loginSuccess() {
        this.router.navigateByUrl('dashboard');
    }
}
