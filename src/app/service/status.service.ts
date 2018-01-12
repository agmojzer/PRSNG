import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Status } from '@model/status';

const url = 'http://localhost:8080/Status/';

@Injectable()
export class StatusService {

	stati: Status[];

  constructor(private http: HttpClient) { 
  	console.warn("Calling Status.Sevice.Constructor");
  	if(typeof this.stati == 'undefined') {
  		this.stati = [];
	  	this.List().subscribe(stati => {
	  		console.log("Stati from subscribe:", stati);
	  		for(let status of stati) {
	  			this.stati[status.Description] = status;
	  		}
	  		console.log("Status object:", this.stati);
	  	});
  	}
  }

  Get(id): Observable<Status[]>{
		return this.http.get(url+"Get?id="+id) as Observable<Status[]>;
	}

  List(): Observable<Status[]> {
		return this.http.get(url+"List") as Observable<Status[]>;
	}

  Change(status: Status): Observable<any> {
		return this.http.post(url+'Update', status) as Observable<any>;
	}

}
