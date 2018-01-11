import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '@model/user';

const url = 'http://localhost:8080/Users/';

@Injectable()
export class UserService {

	users: User[];

	authenticate(username: string, password: string): Observable<User[]>{
		return this.http.get(url+"Authenticate?uname="+username+"&pwd="+password) as Observable<User[]>;
	}

	List(): Observable<User[]>{
		return this.http.get(url+"List") as Observable<User[]>;
	}

	Get(id): Observable<User[]>{
		return this.http.get(url+"Get?id="+id) as Observable<User[]>;
	}

	Add(user: User){
		return this.http.post(url+"Add", user) as Observable<any>;
	}

	Update(user: User){
		return this.http.post(url+"Update", user) as Observable<any>;
	}

	Delete(id): Observable<any>{
		console.log(url+"Delete?id="+id);
		return this.http.get(url+"Delete?id="+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }

}
