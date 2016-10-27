import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import { CoolLocalStorage } from 'angular2-cool-storage';

import {User} from './user';

import '../rxjs-operators';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    user:User = null;
    constructor(private http:Http,
                private router:Router,
                private localStorage:CoolLocalStorage){
        this.user = this.localStorage.getObject('user');
    }

    constructor(private http: Http, private router: Router) {}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getUsers(search:string){
        const headers = this.getHeadersDefault();
        return this.http.get('http://localhost:3006/server/users', {headers:headers}).map(
            (data:Response) => data.json()
        ).catch(this.handleError);

    }

    getUser(userid:string){
        const headers = this.getHeadersDefault();
        return this.http.get('http://localhost:3006/server/users' + userid, {headers:headers}).map(
            (data:Response) => data.json()
        )
    }

    getHeadersDefault():Headers{
        const headers = new Headers();
        if(this.user){
            headers.append('Authorization', 'TOKEN ' + this.user.token);
        }
        return headers;
    }

    register(user) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:3006/server/users/register',
            JSON.stringify({name: user.name, password: user.password}), options)
            .map(response => response.json())
    }

    login(user: User) {
        const body = JSON.stringify({username: user.name, password: user.password});
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:3006/server/users/login', body, {headers: headers}).map(
            (data: Response) => {
                let user = data.json();
                this.user = user.user;
                this.user.token = user.token;
                this.localStorage.setObject('user', this.user);
                return true;
            }
        ).catch(this.handleError);
    }

    isLogin(){
        if(this.user === null) return false;
        else return true;
    }

    logout() {
        this.user = null;
        this.localStorage.clear();
        this.router.navigate(['']);
    }

    getUserLogin(){
        return this.user;
    }

    private handleError(error:any){
        console.log(error);
        return Observable.throw(error.json());
    }
}
