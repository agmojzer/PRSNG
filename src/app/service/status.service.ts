import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Status } from '@model/status';

const url = 'http://localhost:8080/Status/';

@Injectable()
export class StatusService {

	stati: Status[];

  constructor(private http: HttpClient) { }

  Get(id): Observable<Status[]>{
		return this.http.get(url+"Get?id="+id) as Observable<Status[]>;
	}

}
